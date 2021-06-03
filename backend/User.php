<?php

class User{


    public function __construct($db){
        $this->db = $db->dbConnection();
    }

    public function getUserById($id){
        $stmt2 = $this->db->prepare('SELECT * FROM USER WHERE id=:id');
        $stmt2->bindParam(":id", $id);
        $stmt2->execute();
        $result = $stmt2->fetch();
        return $result;
    }


    public function getUserByEmail($email){
        $stmt2 = $this->db->prepare('SELECT * FROM USER WHERE email=:email');
        $stmt2->bindParam(":email", $email);
        $stmt2->execute();
        $result = $stmt2->fetch();
        return $result;
    }
    public function login($email,$password){
        $stmt = $this->db->prepare('SELECT * FROM USER WHERE email=:email');
        $stmt->bindParam(":email", $email);
  
        $stmt->execute();
        $result = $stmt->fetch();
        return $result;
    }

    public function register($data){
        // query to insert record
    $query = "INSERT INTO user SET nom=:nom, prenom=:prenom, brand_name=:brand_name, email=:email, password=:password, dateNaissance=:dateNaissance, tel=:tel, adresse=:adresse, ville=:ville, type=:type";
    if($this->getUserByEmail($data->email)){
        return false;
    }
    $stmt = $this->db->prepare($query);

     // bind values
     $stmt->bindParam(":nom", $data->nom);
     $stmt->bindParam(":prenom", $data->prenom);
     $stmt->bindParam(":brand_name", $data->brand_name);
     $stmt->bindParam(":email", $data->email);
     $stmt->bindParam(":password", $data->password);
     $stmt->bindParam(":dateNaissance", $data->dateNaissance);
     $stmt->bindParam(":tel", $data->tel);
     $stmt->bindParam(":adresse", $data->adresse);

     $stmt->bindParam(":ville", $data->ville);
     $stmt->bindParam(":type", $data->type);
    
   
     // execute query
     if($stmt->execute()){
       
        $last_id = $this->db->lastInsertId();
      
        $result = $this->getUserById($last_id);
     
        return $result;
     }
   
     return false;
    }
}