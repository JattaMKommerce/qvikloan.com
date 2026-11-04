<?php
/**
 * Tells the chat widget whether the iamkratu.ai chat works for its widget key.
 *
 * iamkratu.ai shows a bare "Invalid widget key" page when the key is not accepted.
 * The browser can't see inside that cross-site iframe, so this script checks it from
 * the server and the widget shows a helpful fallback (enquiry form, WhatsApp, call) instead.
 *
 * GET /api/chat-status.php?key=...  ->  {"available": true | false | null}
 * null means iamkratu.ai could not be reached; the widget then just tries the chat.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$key = (string) ($_GET['key'] ?? '');
if (!preg_match('/^[A-Za-z0-9]{16,64}$/', $key)) {
    echo json_encode(['available' => false]);
    exit;
}

// Cache the answer for 5 minutes so every visitor doesn't trigger a check.
$cacheFile = sys_get_temp_dir() . '/qvikloan-chat-status-' . hash('sha256', $key) . '.json';
if (is_file($cacheFile) && filemtime($cacheFile) > time() - 300) {
    header('Cache-Control: public, max-age=300');
    readfile($cacheFile);
    exit;
}

$url = 'https://iamkratu.ai/customer-chat/?key=' . rawurlencode($key);
$referer = 'https://' . preg_replace('/[^A-Za-z0-9.:-]/', '', (string) ($_SERVER['HTTP_HOST'] ?? 'qvikloan.com')) . '/';
$body = false;
$status = 0;

if (function_exists('curl_init')) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 4,
        CURLOPT_TIMEOUT => 6,
        CURLOPT_REFERER => $referer,
        CURLOPT_USERAGENT => 'QvikLoan chat status check',
    ]);
    $body = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
} else {
    $context = stream_context_create(['http' => [
        'timeout' => 6,
        'ignore_errors' => true,
        'header' => "Referer: {$referer}\r\nUser-Agent: QvikLoan chat status check",
    ]]);
    $body = @file_get_contents($url, false, $context);
    foreach ($http_response_header ?? [] as $line) {
        if (preg_match('#^HTTP/\S+\s+(\d{3})#', $line, $m)) {
            $status = (int) $m[1];
        }
    }
}

if ($body === false || $status === 0) {
    // Couldn't reach iamkratu.ai: don't cache, let the widget try the chat itself.
    header('Cache-Control: no-store');
    echo json_encode(['available' => null]);
    exit;
}

$result = json_encode(['available' => $status === 200 && stripos((string) $body, 'Invalid widget key') === false]);
@file_put_contents($cacheFile, $result);
header('Cache-Control: public, max-age=300');
echo $result;
