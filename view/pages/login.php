<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEWROCK</title>
    <link rel="icon" href="../../assets/img/logo/logo.png" type="image/png">

    <!-- styles -->
    <link rel="stylesheet" href="../styles/style.css">
    <!-- https://material.io/resources/icons/?style=round -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Round" rel="stylesheet">
    <link rel="stylesheet"
        href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet"
        href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet"
        href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet"
        href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>

<body>

<!-- Header -->
    <?php
    include '../utils/header.php';
    ?>

    <main class="main_form">
        <!-- login -->
        <section class="login">
            <h2>Iniciar Sesión</h2>
            <div class="login_form">
                <img src="../../assets/img/icons/user3.png" alt="User">
                <!-- // TODO Poner los mensajes por id -->
                <h3 class="mensaje mensaje_error ocultar">Datos Incorrectos</h3>
                <form method="POST" action="" id="formLogin">
                    <div class="container">
                        <div class="inputbox">
                            <span class="inputbox_text" >Email</span>
                            <span class="material-symbols-sharp">mail</span>
                        </div>
                        <input type="email" name="txtEmail" class="campos" placeholder="Email" id="email">
                    </div>
                    <div class="container">
                        <div class="inputbox">
                            <span class="inputbox_text" >Password</span>
                            <span class="material-symbols-sharp">lock</span>
                        </div>
                        <input type="password" name="txtPassword" class="campos" placeholder="Password" id="password">
                    </div>
                    <input type="submit" value="Iniciar Sesión" class="campos enviar" id="subBtn">
                    <span class="txt" id="txtRegistrar">Registrarse</span>
                </form>
            </div>
        </section>
        <!-- Registro -->
        <section class="registro ocultar">
            <h2>Nuevo registro de usuario</h2>
            <div class="registro_form">
                <img src="../../assets/img/icons/user3.png" alt="User">
                <!-- // TODO Poner los mensajes por id -->
                <h3 class="mensaje mensaje_correcto ocultar"></h3>
                <h3 class="mensaje mensaje_error ocultar">Error al reallizar el registro</h3>
                <form method="POST" action="">
                    <div class="container">
                        <div class="inputbox">
                            <span class="inputbox_text">Email</span>
                            <span class="material-symbols-sharp">mail</span>
                        </div>
                        <input type="email" name="txtEmail" class="campos" placeholder="Email" id="emailRegistro">
                    </div>
                    <div class="container">
                        <div class="inputbox">
                            <span class="inputbox_text">Password</span>
                            <span class="material-symbols-sharp">lock</span>
                        </div>
                        <input type="password" name="txtPassword" class="campos" placeholder="Password" id="passwordRegistro">
                    </div>
                    <div class="container">
                        <div class="inputbox">
                            <span class="inputbox_text">Repite Password</span>
                            <span class="material-symbols-sharp">lock</span>
                        </div>
                        <input type="password" name="txtPassword" class="campos" placeholder="Password" id="passwordRepeat">
                    </div>
                    <input type="submit" value="Registrarse" class="campos resgistro_btn" id="subBtnRegistro">
                    <span class="txt" id="txtLogin">Iniciar Sesión</span>
                </form>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <?php
        include '../utils/footer.php';
    ?>

    <!-- js -->
    <script src="../js/jquery.min.js"></script>
    <script src="../js/menu_header.js"></script>
    <script src="../js/login.js"></script>
</body>

</html>