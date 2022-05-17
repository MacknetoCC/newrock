

<?php
    require_once '../model/userModel.php';

if (isset($_POST['tag']) && $_POST['tag'] !=='') {

    // login del usuario
    if (!strcmp($_POST['tag'], 'login')) {
        $email      = $_POST['email'];
        $pass       = $_POST['password'];

        $user       = new UserModel();
        $registro   = $user->getUser($email);
        // var_dump($registro);
        foreach ($registro as $row) {
            $id     = $row['id_user'];
            $hass   = $row['password'];
            $mail   = $row['email'];
        }
        if (password_verify($pass, $hass)) {
            session_start();
            $_SESSION['email']  = $mail;
            $_SESSION['idUser'] = $id;
        } else {
            echo 'no es la misma contraseña \n';
            echo "false";
            return;
        }


        echo 'Bienvenido ' . $mail;
    }

    // resigtrar un nuevo usuario
    if (!strcmp($_POST['tag'], 'registro')) {
        $email          = $_POST['email'];
        $pass           = $_POST['password'];

        $passHash       = password_hash($pass, PASSWORD_DEFAULT, array("cost"=>12));

        $u              = new UserModel();
        $insertarUser   = $u->insertUser($email, $passHash);

        echo $insertarUser;
    }

    // Eliminar sesion
    if (!strcmp($_POST['tag'], 'destroy')) {
        echo 'estas en destroy';
        session_start();
        session_destroy();
        echo 'ususario fuera';
    }
}


?>