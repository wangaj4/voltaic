<?php
// Get the data sent from JavaScript
$data = $_POST["data"];

// Process the data (replace with your desired logic)
$processedData = strtoupper($data); // Example: Convert data to uppercase

// Send the processed data back to JavaScript
echo json_encode(array("response" => $processedData));
?>