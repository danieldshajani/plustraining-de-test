<?php
// Define the correct access code
$correctAccessCode = "plustrainingat";

// Get the access code sent from the login form
$data = json_decode(file_get_contents("php://input"));
$accessCode = $data->accessCode;

// Check if the provided access code is correct
if ($accessCode === $correctAccessCode) {
    // Access granted
    http_response_code(200); // OK
} else {
    // Access denied
    http_response_code(403); // Forbidden
}
?>
