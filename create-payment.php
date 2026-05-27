<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// PayTabs Configuration
$serverKey = 'SRJNLML6TB-HZLJ9HLBDW-6TMRZD9BDN';  // Replace with your actual Server Key
$profileId = '48159';          // Replace with your actual Profile ID

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(['error' => 'Invalid request data']);
    exit;
}

// Extract data from request
$cartId = $input['cartId'] ?? 'ORDER_' . time();
$amount = $input['amount'] ?? 0;
$visaType = $input['visaType'] ?? 'UAE Visa';
$customerName = $input['customerName'] ?? '';
$customerEmail = $input['customerEmail'] ?? '';
$customerPhone = $input['customerPhone'] ?? '';
$applicationId = $input['applicationId'] ?? $cartId;

// Build PayTabs request
$paymentData = array(
    "profile_id" => $profileId,
    "tran_type" => "sale",
    "tran_class" => "ecom",
    "cart_id" => $cartId,
    "cart_currency" => "AED",
    "cart_amount" => floatval($amount),
    "cart_description" => $visaType . " - UAE Visa Application",
    "paypage_lang" => "en",
    
    "customer_details" => array(
        "name" => $customerName,
        "email" => $customerEmail,
        "phone" => $customerPhone,
        "street1" => "N/A",
        "city" => "Dubai",
        "state" => "Dubai",
        "country" => "AE",
        "zip" => "00000"
    ),
    
    "shipping_details" => array(
        "name" => $customerName,
        "email" => $customerEmail,
        "phone" => $customerPhone,
        "street1" => "N/A",
        "city" => "Dubai",
        "state" => "Dubai",
        "country" => "AE",
        "zip" => "00000"
    ),
    
    "callback" => "https://cityonetours.com/payment-callback.php",
    "return" => "https://cityonetours.com/visa-countries-list/uae-bookingprocess.php?payment=success&appId=" . urlencode($applicationId)
);

// PayTabs API endpoint
$url = 'https://secure.paytabs.com/payment/request';

// Initialize cURL
$ch = curl_init($url);

curl_setopt_array($ch, array(
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($paymentData),
    CURLOPT_HTTPHEADER => array(
        'Authorization: ' . $serverKey,
        'Content-Type: application/json'
    ),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
    CURLOPT_TIMEOUT => 30
));

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);

curl_close($ch);

// Handle errors
if ($curlError) {
    echo json_encode(['error' => 'Connection error: ' . $curlError]);
    exit;
}

if ($httpCode !== 200) {
    echo json_encode(['error' => 'PayTabs error (HTTP ' . $httpCode . '): ' . $response]);
    exit;
}

// Decode and return response
$decoded = json_decode($response, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(['error' => 'Invalid response from PayTabs']);
    exit;
}

// Return the PayTabs response
echo json_encode($decoded);
?>