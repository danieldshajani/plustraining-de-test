<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Submit | Einstufungstest DE</title>
</head>

<body>

<?php

$hash = hash("md5", $_POST["name"] . time());

$messageDebug = "<p>Jemand hat den Einstufungstest Deutsch abgeschlossen.</p>"
    . "<p>Name: " . $_POST["name"] . "<br />"
    . "Firma: " . $_POST["company"] . "<br />"
    . "Standort: " . $_POST["location"] . "<br />"
    . "E-Mail: " . $_POST["email"] . "<br />"
    . "Telefon: " . $_POST["phone"] . "</p>"
    . "<p>Ergebnis: " . $_POST["result"] . "<br />"
    . "Zeitaufwand: " . $_POST["totalTime"] . "</p>"
    . "<p>&Uuml;bersicht &uuml;ber die ausgew&auml;hlten Antworten: <br />"
    . "<a href=\"https://de-test.loqui.at/results/" . $hash . ".html\">"
    . "https://de-test.loqui.at/results/" . $hash . ".html</a></p>"
    . "<p>Erreichte Punkte: " . $_POST["totalPoints"] . "</p>"
    . "<p>von maximal " . $_POST["maxPoints"] . "</p>"
    . "<p>Trace: <br />" . $_POST["trace"] . "</p>";

// Construct the data array
$data = array(
    "name" => $_POST["name"],
    "result" => $_POST["result"],
    "totalTime" => $_POST["totalTime"],
    "totalPoints" => $_POST["totalPoints"],
    "maxPoints" => $_POST["maxPoints"],
    "trace" => $_POST["trace"],
    "resultsFileLink" => "https://wn-einstufung.atex.co.at/grtest/results/$hash.html"
);

// Convert data array to JSON
$jsonData = json_encode($data);

// Set POST request URL
$url = "https://prod-156.westeurope.logic.azure.com:443/workflows/66be862616364cd88f9af4a742ae91c9/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8JydoOpaU5RI-seV1qXsNgkt4UT5malTRWGm58N2Hn8";

// Set CURL options
$options = array(
    CURLOPT_URL => $url,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $jsonData,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($jsonData)
    ),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYHOST => 0, // Set to 0 if HTTPS connection
    CURLOPT_SSL_VERIFYPEER => 0  // Set to 0 if HTTPS connection
);

// Initialize CURL session
$curl = curl_init();

// Set CURL options
curl_setopt_array($curl, $options);

// Execute CURL request and store response
$response = curl_exec($curl);

// Check for CURL errors
if(curl_errno($curl)){
    echo 'Curl error: ' . curl_error($curl);
}

// Close CURL session
curl_close($curl);

// Output response
echo $response;

// creating results website
$results = "<!DOCTYPE html><html><head><meta charset=\"UTF-8\">"
    . "<title>Plus Training OG | Ergebnis Einstufungstest Deutsch</title>"
    . "<meta name=\"HandheldFriendly\" content=\"True\">"
    . "<meta name=\"MobileOptimized\" content=\"320\">"
    . "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
    . "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">"
    . "<meta http-equiv=\"cleartype\" content=\"on\">"
    . "<link rel=\"stylesheet\" href=\"../style.css\" type=\"text/css\" />"
    . "<link rel=\"stylesheet\" href=\"../style-results.css\" type=\"text/css\" />"
    . "<link rel=\"stylesheet\" href=\"../style-results-print.css\" type=\"text/css\" />"
    . "</head>"
    . $_POST["html"]
    . "</html>";

file_put_contents("results/" . $hash . ".html", str_replace("\\", "", $results));

?>
</body>
</html>
