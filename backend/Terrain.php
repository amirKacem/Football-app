<?php

class Terrain{
    public function __construct($db){
        $this->db = $db->dbConnection();
    }


    public function getAllTerrains(){
        $query = "select * from terrain";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;

    }

    public function add($data){
    $query = "INSERT INTO terrain SET 
    user_id=:user_id,
    categorie=:categorie,
    type=:type,
    description=:description, 
    nom=:nom,
    prix=:prix,
    longeur=:longeur, 
    largeur=:largeur";
   
    $stmt = $this->db->prepare($query);
     // bind values
     $stmt->bindParam(":user_id", $data->user_id);
     $stmt->bindParam(":categorie", $data->categorie);
     $stmt->bindParam(":type", $data->type);
     $stmt->bindParam(":description", $data->description);
     $stmt->bindParam(":nom", $data->nom);
     $stmt->bindParam(":prix", $data->prix);
     $stmt->bindParam(":longeur", $data->longeur);
     $stmt->bindParam(":largeur", $data->largeur);    
   
     // execute query
     if($stmt->execute()){
        return "Terrain Added";
     }
     return false;
    }
}