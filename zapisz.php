<?php
$host = 'localhost';
$user = 'root';
$pass = ''; // domyślnie puste w XAMPP
$dbname = 'formularzDB';

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
  die("Błąd połączenia: " . $conn->connect_error);
}

$imie = $_POST['imie'];
$nazwisko = $_POST['nazwisko'];
$email = $_POST['email'];

$stmt = $conn->prepare("INSERT INTO uzytkownicy (imie, nazwisko, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $imie, $nazwisko, $email);

if ($stmt->execute()) {
  echo "Sukces";
} else {
  echo "Błąd";
}

$stmt->close();
$conn->close();
?>
