<?php
 header("Access-Control-Allow-Origin: *");
    // echo '{"token" : "employee"}';
    //conn
    $conn = new mysqli("localhost", "root", "", "laundreasy");
    //check
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $regno = $_POST['email'];
    $password = $_POST['password'];
    $sql = "SELECT * FROM users WHERE userid = '$regno' AND password = '$password'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            // regex to check if the user is an employee
            if(preg_match('/^[0-9]{2}[A-Z]{3}\d{4}$/', $row["userid"])){
                echo '{"token" : "'.$row["userid"].'"}';
            }
            else{
                echo '{"token" : "'.$row["userid"].'"}';
            }
        }
    } else {
        echo '{"token" : "invalid"}';
    }
    $conn->close();
?>