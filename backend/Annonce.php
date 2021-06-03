<?php

class Annonce{
    public function __construct($db){
        $this->db = $db->dbConnection();
    }


    public function getAllAnnonce(){
        $query = "select * from annonce";
        return $this->db->fetchAll();

    }
}