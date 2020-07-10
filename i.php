<?php
$servername = "sql205.byetcluster.com";
$username = "epiz_25971339";
$password = "hMZzThRqz7cFJ8";
$dbname = "epiz_25971339_Sample";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO Sample (name)
VALUES ('A')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
