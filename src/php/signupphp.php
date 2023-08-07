<?php
header("Access-Control-Allow-Origin: *");
    // conn
    $conn = new mysqli("localhost", "root", "", "laundreasy");
    // check
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $regno = $_POST['regNo'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $room = $_POST['room'];
    $gender = $_POST['gender'];
    $block = $_POST['block'];

    $sql = "INSERT INTO users (userid,block,room,gender,email, password) VALUES ('$regno','$block','$room','$gender','$email','$password')";
    $result = $conn->query($sql);
    if ($result) {
            echo '{"token" : "'.$regno.'"}';
    } else {
        echo '{"token" : "invalid"}';
    }

    //conn close
    $conn->close();
