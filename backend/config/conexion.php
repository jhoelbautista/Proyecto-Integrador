<?php
$host = "localhost";
$db = "sistema_escolar";
$user = "root";      // Cambia esto si usas otro usuario
$pass = "";          // Cambia esto si tu MySQL tiene contraseña

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>