<?php
// Change these values to your own database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if all fields are filled
    if (isset($_POST["new-username"]) && isset($_POST["new-Email"]) && isset($_POST["new-password"])) {
        $newUsername = $_POST["new-username"];
        $newEmail = $_POST["new-Email"];
        $newPassword = $_POST["new-password"];

        // You can add additional validation and sanitation here

        // SQL statement to insert data into the table
        $sql = "INSERT INTO users (username, email, password) VALUES ('$newUsername', '$newEmail', '$newPassword')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        // Handle the case where the required fields are not filled
        // For example:
        // echo "Please fill in all fields.";
    }
}

// Close the connection
$conn->close();
?>