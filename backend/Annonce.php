<?php

class Annonce{
    public function __construct($db){
        $this->db = $db->dbConnection();
    }


    public function getAllAnnonce(){
        $query = "select * from annonce";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll();
        return $result;

    }

    public function add($data){
    $query = "INSERT INTO annonce SET titre=:titre,pub=:pub,
    nom=:nom,
    prenom=:prenom, 
    brand_name=:brand_name,
    type=:type, 
    image=:image,
    dateCreation=:dateCreation, 
    updated_at=:updated_at";
   
    $stmt = $this->db->prepare($query);

     // bind values
     $stmt->bindParam(":nom", $data->nom);
     $stmt->bindParam(":prenom", $data->prenom);
     $stmt->bindParam(":brand_name", $data->brand_name);
     $stmt->bindParam(":titre", $data->titre);
     $stmt->bindParam(":pub", $data->pub);
     $stmt->bindParam(":dateCreation", $data->dateCreation);
     $stmt->bindParam(":image", $data->image);
     $stmt->bindParam(":updated_at", $data->updated_at);
     $stmt->bindParam(":type", $data->type);
    
   
     // execute query
     if($stmt->execute()){
       
        $last_id = $this->db->lastInsertId();
     
        return "Annonce Added";
     }
   
     return false;
    }
}