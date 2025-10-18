<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

include 'config/conexion.php';

$data = json_decode(file_get_contents("php://input"));
$usuario = $data->usuario ?? '';
$contrasena = $data->contrasena ?? '';

// Validar que los datos no estén vacíos
if (empty($usuario) || empty($contrasena)) {
    echo json_encode(["success" => false, "error" => "Datos incompletos, por favor ingresa usuario y contraseña"]);
    exit;
}

$sql = "SELECT * FROM usuarios WHERE usuario = ? AND estado = 'activo'";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $usuario);
$stmt->execute();
$result = $stmt->get_result();

// Verificar si se encontró el usuario
if ($result->num_rows === 1) {
    $fila = $result->fetch_assoc();

    // Verificar la contraseña utilizando password_verify
    if (password_verify($contrasena, $fila['contrasena'])) {
        $nombreCompleto = $fila['nombre'] ?? $fila['usuario']; // Usa 'nombre' si existe, si no, el usuario
        $inicial = strtoupper(substr($nombreCompleto, 0, 1)); // Inicial del nombre en mayúscula

        // Devolver respuesta exitosa con los datos del usuario
        echo json_encode([
            "success" => true,
            "rol" => $fila['rol'],
            "ci" => $fila['ci'],
            "name" => $nombreCompleto,
            "initial" => $inicial
        ]);
    } else {
        // Contraseña incorrecta
        echo json_encode(["success" => false, "error" => "Contraseña incorrecta"]);
    }
} else {
    // Usuario no encontrado o inactivo
    echo json_encode(["success" => false, "error" => "Usuario no encontrado o está inactivo"]);
}
?>
