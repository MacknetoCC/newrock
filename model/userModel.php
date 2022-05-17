<?php

require_once 'connectBBDD.php';

// Clase donde se gestiona el CRUD de los usuarios
class UserModel
{
    // Propiedades
    private $conectarDB;

    // Constructor
    public function __construct()
    {
        $this->conectarDB = ConnectBBDD::connect();
    
    }

    // Funciones CRUD
    // TODO obtener usuarios
    public function getUsers()
    {
        $sql = "SELECT * FROM users";
        $result = $this->conectarDB->query($sql);
        $result->execute();

        if (!$result) {
            die('Error mostrar todos los usuarios');
        } else {
            $row = $result->fetchAll(PDO::FETCH_ASSOC);
            return $row;
        }
    }

    // TODO obtener un usuario
    public function getUser($email)
    {
        $sql = "SELECT * FROM users WHERE email like :email";
        
        $result = $this->conectarDB->prepare($sql);
        $result = $this->conectarDB->prepare($sql);

        $result->bindParam(":email", $email);
        $result->execute();

        if (!$result) {
            die("Error");
        } else {
            $row = $result->fetchAll(PDO::FETCH_ASSOC);
            return $row;
        }
    }

    // TODO insertar usuario
    public function insertUser($email, $pass)
    {
        $sql = "INSERT INTO users(email, password) VALUES (:email,:pass)";
        $result = $this->conectarDB->prepare($sql);
        $result->bindParam(':email', $email);
        $result->bindParam(':pass', $pass);
        $result->execute();
        
        if (!$result) {
            die("Error");
        } else {
            $text = "El registro se ha realizado correctamente";
            return $text;
        }
    }
}
