<?php
// Configurações do banco de dados
$host = "localhost"; // Host do banco de dados
$user = "user"; // Usuário do banco de dados
$password = "password"; // Senha do banco de dados
$db_name = "api"; // Nome do banco de dados

// Conecta ao banco de dados
$connection = new mysqli($host, $user, $password, $db_name);

// Verifica se houve erros na conexão
if ($connection->connect_error) {
    die("Erro na conexão com o banco de dados: " . $connection->connect_error);
}
?>
