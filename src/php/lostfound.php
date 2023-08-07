<?php
    header("Access-Control-Allow-Origin: *");
    
    $id = '';
    $conn = mysqli_connect("localhost", "root", "");
    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_select_db($conn, "laundreasy");
    $method = $_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            //select query
            $sql = "SELECT item,description ,phone,foundat  FROM lostfound order by pubtime desc";
            break;
        case 'POST':

            $item = $_POST['item'];
            $description = $_POST['description'];
            $phone = $_POST['phNo'];
            $foundat = $_POST['foundAt'];
            $sql = "INSERT INTO lostfound (item,description,phone,foundat) VALUES ('$item','$description','$phone','$foundat')";
            break;
    }
    
    //execute the query
    $result = mysqli_query($conn, $sql);
    if(!$result){
        die("Query failed: " . mysqli_error($conn));
    }
    if($method == 'GET'){
        if (!$id) echo '[';
        for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
          echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
        }
        if (!$id) echo ']';
    }
    elseif($method == 'POST'){
        echo json_encode($result);
    }

    $conn->close();
