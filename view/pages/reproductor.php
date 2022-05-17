<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="author" content="Mackneto">
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

</head>

<body>
   <!-- Header -->
   <?php
        include '../utils/header.php'
    ?>

    <main class="main">
        <div class="container">

            <!-- elección de discos -->
            <section class="slideshow">
                <div id="title"></div>
                <div class="content">
                    <div class="content-carrusel">
    
                    </div>
                </div>
            </section>
    
            <!-- reproductor -->
            <section class="reproductor col-6">
                <div id="contenedor">
                    <div id="ref"></div>
                    <div class="box">
                        <div class="screen">
                            <img src="../../assets/img/Santa calavera.jpg" alt="Portada Santa calavera" class="screen_img" id="screen_img">
                            <h2 class="screen_track" id="screen_track"></h2>
    
                            <div class="time">
                            </div>
                            <audio id="audio"></audio>
                            <input type="range" name="time" id="progress_time" value="0" step="any" class="progress_time">
                            <div class="icon__volumen">
                                <a class="btns_items none" id="mute"><span class="material-icons-round">
                                    volume_off
                                    </span></a>
                                <a class="btns_items" id="down"><span class="material-icons-round">
                                    volume_down
                                    </span></a>
                                <a class="btns_items" id="up"><span class="material-icons-round">
                                    volume_up
                                    </span></a>
                            </div>
                            <input type="range" name="volumen" id="progress_volumen" min="0" max="1" step="0.01" class="progress_time">
                        </div>
                        <div class="btns">
                            <a class="btns_items" id="previus"><span class="material-icons-round">
                                    skip_previous
                                </span></a>
                            <a class="btns_items" id="play"><span class="material-icons-round">
                                    play_arrow
                                </span></a>
                            <a src class="btns_items none" id="pause"><span class="material-icons-round">
                                    pause
                                </span></a>
                            <a class="btns_items" id="stop"><span class="material-icons-round">
                                    stop
                                </span></a>
                            <a class="btns_items" id="random" title="shuffle"><span class="material-icons-round">
                                    shuffle
                                </span></a>
                            <a class="btns_items" id="repeat"><span class="material-icons-round"  id="repeat-list" title="Playlist looped">
                                    repeat
                                </span></a>
                            <a class="btns_items" id="next"><span class="material-icons-round">
                                    skip_next
                                </span></a>
                        </div>
                    </div>
                    <div id="apartado" hidden>
                        <div id="letra">
                            <canvas id="analyser_render"></canvas>
                        </div>
                    </div>
                </div>
    
            </section>
            <!-- canciones -->
            <section class="data col-6" id="datos">
                <div id="canciones">
                </div>
            </section>
        </div>

        <!-- Footer -->
		<?php
            include '../utils/footer.php';
        ?>
    
    </main>

    <!-- js -->
    <script src="../js/jquery.min.js"></script>
    <script src="../js/menu_header.js"></script>
    <script src="../js/reproductor.js"></script>
</body>

</html>