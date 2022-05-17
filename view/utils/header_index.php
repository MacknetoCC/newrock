<!-- Header -->
<?php
    session_start();
?>

<header class="header">

<!-- logo -->
<div class="logo">
    <a href="index.php" class="link_logo"><img src="./assets/img/logo/logo_web.png" alt="Logo de la web"></a>
</div>

<!-- Name page -->
<div class="content_title">
    <h1 class="title title_header">MetaPlayer</h1>
</div>

<!-- Menu -->
<nav class="nav">
    <span class="material-symbols-sharp icon_menu">
        menu
    </span>

    <!-- Enlaces -->
    <div class="nav_link">
        <span class="material-symbols-sharp cancel">
            close
        </span>
        <a href="index.php" class="link" id="home" title="Home">
            <span class="material-symbols-sharp">
            home
            </span>
        </a>
        <?php
        if (isset($_SESSION['email'])) {
            ?>
        <a href="view/pages/reproductor.php" class="link linkPlayer" id="linkPlayer" title="Reproductor Musical">
                <span class="material-symbols-sharp">
                    music_note
                </span>
        </a>
        <a href="view/pages/login.php" class="link linkLogin ocultar" id="linkLogin" title="Login">
            <span class="material-symbols-sharp">
                login
            </span>
        </a>
        <a href="#" class="link linkLogin " id="linkLogoutIndex" title="Logout">
            <span class="material-symbols-sharp">
                logout
            </span>
        </a>
        <?php
        } else {
            ?>
            <a href="view/pages/reproductor.php" class="link linkPlayer ocultar" id="linkPlayer" title="Reproductor Musical">
                <span class="material-symbols-sharp">
                    music_note
                </span>
            </a>
            <a href="view/pages/login.php" class="link linkLogin" id="linkLogin" title="Login">
                <span class="material-symbols-sharp">
                    login
                </span>
            </a>
            <a href="#" class="link linkLogout ocultar" id="linkout" title="Logout">
            <span class="material-symbols-sharp">
                logout
            </span>
        </a>
        <?php
        }
        ?>
        <a href="view/pages/about.php" class="link" id="about" title="Conocenos">
            <span class="material-symbols-sharp">
                group
            </span>
        </a>
    </div>
</nav>
</header>

