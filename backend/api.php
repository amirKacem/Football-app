<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once './Database.php';
require './User.php';
$data = json_decode(file_get_contents("php://input"));

if(isset($data->method)){
    $method = $data->method;
    $db =new Database();
    $user =new User($db);
    if($method=='login'){
        $email = $data->email;
        $password = $data->password;
        if($user = $user->login($email,$password)){
            echo json_encode($user);
            exit;
        }else{
            echo json_encode(['message'=>'Invalid username or password']);
            exit;
        }
    }

    else if($method=="register"){
        
        echo json_encode($user->register($data));
        exit;

    }
    

}
