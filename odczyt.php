<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'formularzDB';

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
  die("Błąd połączenia: " . $conn->connect_error);
}

$sql = "SELECT imie, nazwisko, email FROM uzytkownicy ORDER BY id DESC";
$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
}

echo json_encode($data);
$conn->close();
?>

