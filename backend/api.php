<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once './Database.php';
require './User.php';
require './Annonce.php';
require './Terrain.php';
$data = json_decode(file_get_contents("php://input"));

if(isset($data->method)){
    $method = $data->method;
    $db =new Database();
    $user =new User($db);
    $annonce = new Annonce($db);
    $terrain = new Terrain($db);    
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
    else if($method=="addAnnonce"){
        echo json_encode($annonce->add($data));
        exit; 
    }
    else if($method=="addTerrain"){
        echo json_encode($terrain->add($data));
        exit; 
    }
    else if($method=="getAllTerrains"){
        echo json_encode($terrain->getAllTerrains());
        exit;
    }else if($method=="getAllAnnonce"){
        echo json_encode($annonce->getAllAnnonce());
        exit;
    }else if($method=="updateUser"){
        echo json_encode($user->update($data));
        exit;
    }
    

}
