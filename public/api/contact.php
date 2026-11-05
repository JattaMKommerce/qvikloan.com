<?php
/**
 * QvikLoan Contact Us and Grievance form relay.
 *
 * The Contact Us page and the Grievance Redressal page POST JSON here. This script validates the
 * message, blocks obvious spam (hidden honeypot field + per-visitor rate limit) and emails it to
 * the support or grievance inbox set in config.php, with a reference number the visitor can quote.
 *
 * Responds with JSON: {"ok":true,"reference":"GRV-..."} or {"ok":false,"error":"..."}.
 * Nothing personal is written to the server error log (reference numbers only).
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
$supportEmail = trim((string) ($config['support_email'] ?? 'help@qvikloan.com'));
$grievanceEmail = trim((string) ($config['grievance_email'] ?? $supportEmail));
$mailFrom = (string) ($config['mail_from'] ?? 'no-reply@qvikloan.com');
$allowedOrigins = (array) ($config['allowed_origins'] ?? ['https://qvikloan.com', 'https://www.qvikloan.com']);

// ---------------------------------------------------------------- request checks
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    fail(405, 'Method not allowed.');
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
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
    fail(429, 'Too many messages from this connection. Please wait a few minutes and try again.');
}

$kind = (string) ($in['kind'] ?? '');
$categories = [
    'contact' => [
        'general' => 'General question',
        'enquiry-status' => 'Status of my loan enquiry',
        'partnership' => 'Lender or business partnership',
        'other' => 'Other',
    ],
    'grievance' => [
        'enquiry-handling' => 'How my enquiry was handled',
        'data-privacy' => 'Personal data, consent or data deletion',
        'unsolicited-contact' => 'Unwanted calls or messages',
        'lender-conduct' => 'Conduct of a lender or its agent',
        'fraud' => 'Suspected fraud or impersonation of QvikLoan',
        'other' => 'Other complaint',
    ],
];
if (!isset($categories[$kind])) {
    fail(422, 'Invalid form type.');
}

$prefix = $kind === 'grievance' ? 'GRV' : 'MSG';
$reference = $prefix . '-' . date('ymd') . '-' . str_pad((string) random_int(0, 99999), 5, '0', STR_PAD_LEFT);

// Bots fill the hidden "website" field; pretend success so they don't retry, but drop the message.
if (trim((string) ($in['website'] ?? '')) !== '') {
    respond(200, ['ok' => true, 'reference' => $reference]);
}

// ---------------------------------------------------------------- validation
/** Trimmed text with control characters removed (newlines kept when $multiline); rejects values over $max bytes. */
function text(array $in, string $key, int $max, bool $multiline = false): string
{
    $pattern = $multiline ? '/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]+/u' : '/[\x00-\x1F\x7F]+/u';
    $value = trim(preg_replace($pattern, ' ', (string) ($in[$key] ?? '')) ?? '');
    if (strlen($value) > $max) {
        fail(422, 'One of the fields is too long. Please shorten it and try again.');
    }
    return $value;
}

$name = text($in, 'name', 200);
if (strlen($name) < 2) {
    fail(422, 'Please enter your name.');
}

$email = text($in, 'email', 254);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(422, 'Please enter a valid email address.');
}

$phone = preg_replace('/\D/', '', (string) ($in['phone'] ?? '')) ?? '';
if (strlen($phone) === 12 && str_starts_with($phone, '91')) {
    $phone = substr($phone, 2);
}
if ($phone !== '' && !preg_match('/^[6-9]\d{9}$/', $phone)) {
    fail(422, 'Please enter a valid 10-digit mobile number.');
}
if ($kind === 'grievance' && $phone === '') {
    fail(422, 'Please enter your mobile number so the Grievance Officer can reach you.');
}

$enquiryRef = text($in, 'enquiryRef', 40);
if ($enquiryRef !== '' && !preg_match('/^[A-Za-z0-9-]+$/', $enquiryRef)) {
    fail(422, 'The reference number can only contain letters, numbers and hyphens.');
}

$categoryKey = (string) ($in['category'] ?? '');
if (!isset($categories[$kind][$categoryKey])) {
    fail(422, 'Please choose what your message is about.');
}

$message = text($in, 'message', 4000, true);
if (strlen($message) < 10) {
    fail(422, 'Please describe your question or complaint in a little more detail.');
}

// ---------------------------------------------------------------- deliver
$fields = [
    'Reference' => $reference,
    'Type' => $kind === 'grievance' ? 'Grievance / complaint' : 'Contact Us message',
    'About' => $categories[$kind][$categoryKey],
    'Received' => date('d M Y, h:i A') . ' IST',
    'Name' => $name,
    'Email' => $email,
    'Mobile' => $phone === '' ? '' : '+91' . $phone,
    'Enquiry reference' => $enquiryRef,
];
$lines = [];
foreach ($fields as $label => $value) {
    if ($value !== '') {
        $lines[] = str_pad($label . ':', 20) . $value;
    }
}
$intro = $kind === 'grievance'
    ? "A grievance was filed on qvikloan.com. Acknowledge it to the customer and record it in the grievance register."
    : 'A message was sent from the Contact Us page on qvikloan.com.';
$body = $intro . "\n\n" . implode("\n", $lines) . "\n\nMessage:\n" . $message . "\n";

$to = $kind === 'grievance' ? $grievanceEmail : $supportEmail;
$subject = ($kind === 'grievance' ? 'Grievance ' : 'Contact message ') . $reference . ' - ' . $name;
$headers = implode("\r\n", [
    'From: QvikLoan Website <' . $mailFrom . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
]);

if (@mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers)) {
    // Log the reference and outcome only: personal details never go in logs (see the Privacy Policy).
    error_log("QvikLoan {$kind} {$reference}: handed to the mail server");
    respond(200, ['ok' => true, 'reference' => $reference]);
}

error_log("QvikLoan {$kind} {$reference}: email to the {$kind} inbox failed");
fail(502, "We couldn't send your message right now. Please email {$supportEmail} directly.");

// ---------------------------------------------------------------- helpers

/** At most $max requests per IP per $window seconds. Fails open if the temp dir isn't writable. */
function isRateLimited(string $ip, int $max, int $window): bool
{
    if ($ip === '' || $max <= 0) {
        return false;
    }
    $dir = sys_get_temp_dir() . '/qvikloan-ratelimit-contact';
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
