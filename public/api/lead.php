<?php
/**
 * QvikLoan website enquiry relay.
 *
 * The enquiry form on the home page POSTs JSON here. This script:
 *   1. validates the lead (same rules as the form),
 *   2. blocks obvious spam (hidden honeypot field + per-visitor rate limit),
 *   3. forwards the lead to iamkratu.ai (URL and key live in config.php, never in the browser),
 *   4. emails the lead to the backup inbox if iamkratu.ai can't be reached, so no lead is lost.
 *
 * Responds with JSON: {"ok":true,"reference":"QVK-..."} or {"ok":false,"error":"..."}.
 */

declare(strict_types=1);

date_default_timezone_set('Asia/Kolkata');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function fail(int $status, string $message): void
{
    respond($status, ['ok' => false, 'error' => $message]);
}

// ---------------------------------------------------------------- settings
$config = [];
if (is_file(__DIR__ . '/config.php')) {
    $loaded = require __DIR__ . '/config.php';
    if (is_array($loaded)) {
        $config = $loaded;
    }
}

// ---------------------------------------------------------------- request checks
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    fail(405, 'Method not allowed.');
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = (array) ($config['allowed_origins'] ?? []);
if ($origin !== '' && !in_array($origin, $allowedOrigins, true)) {
    fail(403, 'This form can only be submitted from the QvikLoan website.');
}

$raw = file_get_contents('php://input', false, null, 0, 20000);
$in = json_decode($raw === false ? '' : $raw, true);
if (!is_array($in)) {
    fail(400, 'Invalid request.');
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '';
if (isRateLimited($ip, (int) ($config['rate_limit_max'] ?? 5), (int) ($config['rate_limit_window_seconds'] ?? 600))) {
    fail(429, 'Too many enquiries from this connection. Please wait a few minutes and try again.');
}

$reference = 'QVK-' . date('ymd') . '-' . str_pad((string) random_int(0, 9999), 4, '0', STR_PAD_LEFT);

// Bots fill the hidden "website" field; pretend success so they don't retry, but drop the lead.
if (trim((string) ($in['website'] ?? '')) !== '') {
    respond(200, ['ok' => true, 'reference' => $reference]);
}

// ---------------------------------------------------------------- validation
$employmentLabels = [
    'salaried' => 'Salaried',
    'self-employed' => 'Self-Employed',
];

/** Trimmed text with control characters removed; rejects values longer than $max bytes. */
function text(array $in, string $key, int $max): string
{
    $value = trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', (string) ($in[$key] ?? '')) ?? '');
    if (strlen($value) > $max) {
        fail(422, 'One of the fields is too long. Please shorten it and try again.');
    }
    return $value;
}

$name = text($in, 'fullName', 300);
if (strlen($name) < 2) {
    fail(422, 'Please enter your full name as per official records.');
}

$mobile = preg_replace('/\D/', '', (string) ($in['mobileNumber'] ?? '')) ?? '';
if (strlen($mobile) === 12 && str_starts_with($mobile, '91')) {
    $mobile = substr($mobile, 2);
}
if (!preg_match('/^[6-9]\d{9}$/', $mobile)) {
    fail(422, 'Please enter a valid 10-digit Indian mobile number.');
}

// Enquiry rules: keep in sync with enquiryRules in src/data/loanProducts.js.
$age = filter_var($in['age'] ?? null, FILTER_VALIDATE_INT);
if ($age === false || $age < 21 || $age > 58) {
    fail(422, 'QvikLoan currently accepts enquiries from people aged 21 to 58.');
}

$city = text($in, 'city', 300);
if ($city === '') {
    fail(422, 'Please enter your city.');
}

$employment = (string) ($in['employmentType'] ?? '');
if (!isset($employmentLabels[$employment])) {
    fail(422, 'Please choose your employment type.');
}

$monthlyIncome = filter_var($in['monthlyIncome'] ?? null, FILTER_VALIDATE_INT);
if ($monthlyIncome === false || $monthlyIncome < 15000) {
    fail(422, 'QvikLoan currently accepts enquiries with a monthly income of ₹15,000 or more.');
}

$loanType = (string) ($in['loanType'] ?? '');
$limits = ['personal' => [50000, 2500000], 'business' => [200000, 5000000]];
if (!isset($limits[$loanType])) {
    fail(422, 'Please choose personal or business loan.');
}
$amount = filter_var($in['amount'] ?? null, FILTER_VALIDATE_INT);
if ($amount === false || $amount < $limits[$loanType][0] || $amount > $limits[$loanType][1]) {
    fail(422, 'Please choose a loan amount within the range shown.');
}

if (($in['consent'] ?? false) !== true) {
    fail(422, 'Please provide explicit consent to submit your enquiry.');
}

// ---------------------------------------------------------------- lead for iamkratu.ai
$lead = [
    'source' => 'qvikloan.com website enquiry form',
    'reference' => $reference,
    'submitted_at' => date('c'),
    'name' => $name,
    'phone' => '+91' . $mobile,
    'age' => $age,
    'city' => $city,
    'loan_type' => $loanType === 'personal' ? 'Personal loan' : 'Business loan',
    'loan_amount' => $amount,
    'loan_amount_display' => inr($amount),
    'employment_type' => $employmentLabels[$employment],
    'monthly_income' => $monthlyIncome,
    'monthly_income_display' => inr($monthlyIncome),
    'consent_given' => true,
    'consent_text' => text($in, 'consentText', 3000),
    'consent_version' => text($in, 'consentVersion', 40),
    'consent_at' => date('c'),
    // Optional, separate from the service consent: may we send offers about other products?
    'marketing_consent' => ($in['marketingConsent'] ?? false) === true,
    'utm_source' => text($in, 'utm_source', 300),
    'utm_medium' => text($in, 'utm_medium', 300),
    'utm_campaign' => text($in, 'utm_campaign', 300),
    'utm_content' => text($in, 'utm_content', 300),
    'utm_term' => text($in, 'utm_term', 300),
    'fbclid' => text($in, 'fbclid', 600),
    'gclid' => text($in, 'gclid', 600),
    'landing_page' => text($in, 'landing_page', 1000),
    'referrer' => text($in, 'referrer', 1000),
    'ip' => $ip,
    'user_agent' => substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 500),
];

// ---------------------------------------------------------------- deliver
$iamkratuUrl = trim((string) ($config['iamkratu_url'] ?? ''));
$delivered = false;
if ($iamkratuUrl !== '') {
    $result = postJson($iamkratuUrl, (array) ($config['iamkratu_headers'] ?? []), $lead);
    $delivered = $result['ok'];
    if (!$delivered) {
        // Server error log only: reference and status, no personal data.
        error_log("QvikLoan lead {$reference}: iamkratu.ai delivery failed (HTTP {$result['status']}) {$result['error']}");
    }
}

$backupEmail = trim((string) ($config['backup_email'] ?? ''));
$mode = (string) ($config['backup_email_mode'] ?? 'on_failure');
$emailed = false;
if ($backupEmail !== '' && ($mode === 'always' || !$delivered)) {
    if ($delivered) {
        $note = 'This lead was also delivered to iamkratu.ai.';
    } elseif ($iamkratuUrl === '') {
        $note = 'iamkratu.ai is not connected yet, so this lead was NOT sent there. Please add it to iamkratu.ai manually.';
    } else {
        $note = 'Delivery to iamkratu.ai FAILED. Please add this lead to iamkratu.ai manually.';
    }
    $emailed = emailLead($backupEmail, (string) ($config['mail_from'] ?? 'no-reply@qvikloan.com'), $lead, $note);
    if (!$emailed) {
        error_log("QvikLoan lead {$reference}: backup email to {$backupEmail} failed");
    }
}

if ($delivered || $emailed) {
    // Log the reference and outcome only: personal details never go in logs (see the Privacy Policy).
    error_log("QvikLoan lead {$reference}: " . ($delivered ? 'delivered to iamkratu.ai' : 'handed to the mail server'));
    respond(200, ['ok' => true, 'reference' => $reference]);
}

fail(502, "We couldn't send your enquiry right now. Please try again in a few minutes.");

// ---------------------------------------------------------------- helpers

/** Indian-style rupee formatting: 300000 -> ₹3,00,000. */
function inr(int $n): string
{
    $s = (string) $n;
    if (strlen($s) <= 3) {
        return '₹' . $s;
    }
    $rest = preg_replace('/\B(?=(\d{2})+(?!\d))/', ',', substr($s, 0, -3));
    return '₹' . $rest . ',' . substr($s, -3);
}

/** At most $max requests per IP per $window seconds. Fails open if the temp dir isn't writable. */
function isRateLimited(string $ip, int $max, int $window): bool
{
    if ($ip === '' || $max <= 0) {
        return false;
    }
    $dir = sys_get_temp_dir() . '/qvikloan-ratelimit';
    if (!is_dir($dir) && !@mkdir($dir, 0700, true) && !is_dir($dir)) {
        return false;
    }
    $fp = @fopen($dir . '/' . hash('sha256', $ip) . '.json', 'c+');
    if ($fp === false) {
        return false;
    }
    flock($fp, LOCK_EX);
    $now = time();
    $hits = json_decode((string) stream_get_contents($fp), true);
    $hits = array_values(array_filter(is_array($hits) ? $hits : [], fn($t) => is_int($t) && $t > $now - $window));
    $limited = count($hits) >= $max;
    if (!$limited) {
        $hits[] = $now;
    }
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, (string) json_encode($hits));
    flock($fp, LOCK_UN);
    fclose($fp);
    return $limited;
}

/** POST the lead as JSON. Success means an HTTP 2xx response. */
function postJson(string $url, array $headers, array $payload): array
{
    $body = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    $headerLines = ['Content-Type: application/json', 'Accept: application/json'];
    foreach ($headers as $key => $value) {
        $headerLines[] = $key . ': ' . $value;
    }

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_HTTPHEADER => $headerLines,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => 5,
            CURLOPT_TIMEOUT => 10,
        ]);
        $response = curl_exec($ch);
        $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
        $error = curl_error($ch);
        return ['ok' => $response !== false && $status >= 200 && $status < 300, 'status' => $status, 'error' => $error];
    }

    $context = stream_context_create(['http' => [
        'method' => 'POST',
        'header' => implode("\r\n", $headerLines),
        'content' => $body,
        'timeout' => 10,
        'ignore_errors' => true,
    ]]);
    $response = @file_get_contents($url, false, $context);
    $status = 0;
    foreach ($http_response_header ?? [] as $line) {
        if (preg_match('#^HTTP/\S+\s+(\d{3})#', $line, $m)) {
            $status = (int) $m[1];
        }
    }
    return ['ok' => $response !== false && $status >= 200 && $status < 300, 'status' => $status, 'error' => $response === false ? 'request failed' : ''];
}

/** Plain-text copy of the lead to the backup inbox. */
function emailLead(string $to, string $from, array $lead, string $note): bool
{
    $subject = 'New QvikLoan enquiry ' . $lead['reference'] . ' - ' . $lead['name'];
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    $lines = [];
    foreach ($lead as $key => $value) {
        if ($value === '' || $value === null) {
            continue;
        }
        $lines[] = str_pad(str_replace('_', ' ', $key) . ':', 22) . (is_bool($value) ? ($value ? 'yes' : 'no') : (string) $value);
    }
    $body = "A new loan enquiry was submitted on qvikloan.com.\n{$note}\n\n" . implode("\n", $lines) . "\n";

    $headers = implode("\r\n", [
        'From: QvikLoan Website <' . $from . '>',
        'Content-Type: text/plain; charset=UTF-8',
    ]);
    return @mail($to, $encodedSubject, $body, $headers);
}
