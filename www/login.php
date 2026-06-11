<?php
session_start();
require_once "db.php";

$username = trim($_POST['username'] ?? '');
$password = $_POST['password'] ?? '';

if ($username === '' || $password === '') {
    exit("Please fill in all fields");
}

// Fetch user by username
$stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 0) {
    exit("Invalid username or password");
}

$stmt->bind_result($id, $hashedPassword);
$stmt->fetch();

// Verify password
if (password_verify($password, $hashedPassword)) {
    $_SESSION['user_id'] = $id;
    $_SESSION['username'] = $username;

    // Redirect to homepage
    header("Location: index.html");
    exit();
} else {
    exit("Invalid username or password");
}

$stmt->close();
$conn->close();
?>
