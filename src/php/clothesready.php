<?php
header("Access-Control-Allow-Origin: *");
// echo '{"token" : "employee"}';
//conn
$conn = new mysqli("localhost", "root", "", "laundreasy");
//check
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$tokenno = $_POST['tokenno'];
$sql = "Update laundry set status = 'Ready' where tokenno = '$tokenno'";
$result = $conn->query($sql);
if ($result) {
    echo '{"token" : "success"}';
} else {
    echo '{"token" : "invalid"}';
}

?>
