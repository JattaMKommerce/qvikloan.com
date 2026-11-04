<?php
/**
 * QvikLoan lead relay settings.
 *
 * HOW TO USE: copy this file to `config.php` in the same folder (api/config.php on the
 * server) and fill in the iamkratu.ai details. config.php is not committed to git and is
 * blocked from the web by api/.htaccess, so the iamkratu key never reaches the browser.
 */
return [
    // The address where iamkratu.ai accepts new leads (a webhook / lead API URL).
    // Ask the iamkratu.ai team for this. Leave '' until you have it: leads will then
    // go to the backup email below so none are lost.
    'iamkratu_url' => '',

    // HTTP headers iamkratu.ai needs to accept the lead, usually the API key.
    // Use whichever form the iamkratu.ai team gives you, for example:
    //   'Authorization' => 'Bearer YOUR_IAMKRATU_API_KEY',
    //   'X-API-Key'     => 'YOUR_IAMKRATU_API_KEY',
    'iamkratu_headers' => [
    ],

    // Backup inbox. Gets a copy of the lead by email when iamkratu.ai cannot be
    // reached (or is not configured yet). Set to '' to turn email off.
    'backup_email' => 'help@qvikloan.com',

    // 'on_failure' = email only when iamkratu.ai fails; 'always' = also email every lead.
    'backup_email_mode' => 'on_failure',

    // Sender for backup emails. Must be an address on your own domain, or the
    // host's mail server may refuse to send it.
    'mail_from' => 'no-reply@qvikloan.com',

    // Websites allowed to submit enquiries to this script.
    'allowed_origins' => [
        'https://qvikloan.com',
        'https://www.qvikloan.com',
    ],

    // Spam protection: at most this many enquiries per visitor (IP) per window.
    'rate_limit_max' => 5,
    'rate_limit_window_seconds' => 600,
];
