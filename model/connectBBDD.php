

<?php

require_once 'config.php';

// Clase donde realizar la conexión a la BBDD
class ConnectBBDD
{

    // método estático que realiza la conexión a la BBDD
    public static function connect()
    {
        try {
            $conexion = new PDO(DB_HOST, DB_USER, DB_PASSWORD);
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conexion->exec(DB_CHARSET);
        } catch (Exception $e) {
            die('Error al realizar la conexión a la BBDD ' . $e->getMessage());
        }

        return $conexion;

    }
}
