<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = "localhost";
$db = "sistema_escolar";
$user = "root";
$pass = "";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "error" => $conn->connect_error]);
} else {
    echo json_encode(["success" => true]);
}

$conn->close();
?>
