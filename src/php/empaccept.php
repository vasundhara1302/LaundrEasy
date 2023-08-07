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
$userid = $_POST['userid'];
$sql = "select * from laundry where tokenno = '$tokenno'";
$result = $conn->query($sql);
if($result->num_rows > 0){
    echo "Invalid";
}else{
    $sql1 = "Update laundry set typeofreq = 'accepted' , status = 'notdone', tokenno = '$tokenno' where userid = '$userid' AND typeofreq = 'pending'";
    $result1 = $conn->query($sql1);
    if ($result1) {
        echo "Success";
    } else {
        echo "Invalid";
    }
}

?>