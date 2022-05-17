window.onload = main;
window.addEventListener("load", initMp3Player, false);
const imgCancion = document.querySelector('#screen_img');
const tituloCancion = document.querySelector('#screen_track');
const audio = document.querySelector('#audio');
const barra = document.querySelector('#progress_time');
const barraVolumen = document.querySelector('#progress_volumen');
const volMute = document.querySelector('#mute');
const volDown = document.querySelector('#down');
const volUp = document.querySelector('#up');
const btnPlay = document.querySelector('#play');
const btnPrevius = document.querySelector('#previus');
const btnPause = document.querySelector('#pause');
const btnStop = document.querySelector('#stop');
const btnNext = document.querySelector('#next');
const btnRepeat = document.querySelector('#repeat');
const btnShuffle = document.querySelector('#random');
const tituloGroup = document.querySelector('#titleGroup');
const imgDisc = document.querySelector('.carousel__cards');
const letraDisc = document.querySelector('#letra');
const singersDics = document.querySelector('#info__canciones');
const cajaDisc = document.querySelectorAll('.info__img')
const caja = document.createElement('div');
const section = document.querySelector('.slideshow');
const contenedorSlide = document.querySelector('.content');
const contenedorCarrusel = document.querySelector('.content-carrusel');
const nombreGrupo = document.querySelector('#title');
const contLista = document.querySelector('#apartado');
const repeatBtn = document.querySelector("#repeat-list");

let discos = [];
let canciones = [];
let id = null;
let rand = false;
let repetir = false;
let canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height, my_gradient;

function main() {
    volInical(20);
    iniciar();
    pausar();
    parar();
    nextCancion();
    previus();
    shuffle();
    repeat();
    slowDown();
    ajax();
}

// Iniciar la reproducción de la canción
function iniciar() {
    btnPlay.addEventListener('click', () => {
        if (context.state === 'suspended') {
            context.resume().then(function () {
                reproducir();
            });
        }
        $('#play').addClass('none');
        $('.screen_img').addClass('animar_disco');

        if ($('#pause').hasClass('none')) {
            $('#pause').removeClass('none');
        }
        reproducir();
    })
    // Barra de progreso del tiempo del track
    audio.addEventListener('timeupdate', () => {
        barra.value = audio.currentTime;
        let segundos = Math.ceil(barra.value % 60);
        if (0 < segundos && segundos < 10) {
            segundos = "0" + segundos;
        }
        let tiempo = (Math.floor(barra.value / 60) + ':' + segundos);
        barra.max = audio.duration;
        segundosMax = Math.ceil(barra.max % 60);
        if (0 < segundosMax && segundosMax < 10) {
            segundosMax = "0" + segundosMax;
        }
        let timeMax = (Math.floor(barra.max / 60) + ':' + segundosMax);
        $('.time').html(`<h3 id="tiempo1">${tiempo}</h3> <h3 id="tiempo2">${timeMax}</h3>`);
    });
    finish();
    changeTime();
    volChange();
}

//funcion siguiente al terminar
function finish() {
    audio.addEventListener("ended", () => {
        if ($("#random").hasClass("press") && rand == true && repetir == false) {
            let randIndex = Math.floor((Math.random() * canciones.length)); //genereting random index/numb with max range of array length
            do {
                randIndex = Math.floor((Math.random() * canciones.length));
            } while (id == randIndex); //this loop run until the next random number won't be the same of current musicIndex
            id = randIndex; //passing randomIndex to musicIndex
            mostrarNameDisco();
            reproducir();
        } else if (rand == false && repetir == false && !$("#random").hasClass("press")) {
            if (id >= (canciones.length - 1)) {
                id = 0;
                mostrarNameDisco();
                reproducir();
            } else {
                ++id;
                mostrarNameDisco();
                reproducir();
            }
        } else {
            repetir = true;
            audio.currentTime = 0;
            mostrarNameDisco();
            reproducir();
        }
    });
}

// Pausar la reproducción de la canción
function pausar() {
    pararPausar(btnPause);
}

// Parar la reproducción de la canción
function parar() {
    pararPausar(btnStop);
}

// parar pausar
function pararPausar(elemento1) {
    if (elemento1 == btnStop) {

        elemento1.addEventListener('click', () => {
            audio.currentTime = 0;
            audio.pause();
            addRemoveClass($('#play'), $('#pause'), 'none');
            clasRemove($('.screen_img'), 'animar_disco')
        });
    }
    elemento1.addEventListener('click', () => {
        audio.pause();
        addRemoveClass($('#play'), $('#pause'), 'none');
        clasRemove($('.screen_img'), 'animar_disco')
    });

}

// Función control del tiempo de la canción en función a la modificación del usuario
function changeTime() {
    barra.addEventListener('change', () => {
        audio.currentTime = barra.value;
    })
}

// función valor inicial del volumen, valor debe ser un dato entre 1 y 100
function volInical(valor) {
    barraVolumen.value = valor / 100;
    audio.volume = barraVolumen.value;
}

// Función control del volumen del mp3 por el usuario
function volChange() {
    barraVolumen.addEventListener('change', () => {
        audio.volume = barraVolumen.value;
        mute(barraVolumen.value);
    })
}

// añadir quitar clases
function addRemoveClass(element1, element2, clase) {
    if (element1.hasClass(clase)) {
        element2.addClass(clase);
        element1.removeClass(clase);
    }
}

// quitar clase
function clasRemove(element1, clase) {
    if (element1.hasClass(clase)) {
        element1.removeClass(clase);
    }
}

// ocutar o mostrar mute
function mute(numero) {
    if (numero == 0) {
        addRemoveClass($('#mute'), $('#down'), 'none');
    } else {
        addRemoveClass($('#down'), $('#mute'), 'none');
    }
}

// funcion next canción
function nextCancion() {
    btnNext.addEventListener("click", function () {
        audio.currentTime = 0;
        if ((canciones.length - 1) > id) {
            ++id;
        } else {
            id = 0;
        }
        mostrarNameDisco();
        reproducir();
    });
}

// funcion previus canción
function previus() {
    btnPrevius.addEventListener("click", function () {
        audio.currentTime = 0;
        if ((canciones.length - 1) >= id && id >= 1) {
            --id
        } else {
            id = canciones.length - 1;
        }
        mostrarNameDisco();
        reproducir();
    });
}
// funcion repeat canción
function repeat() {
    btnRepeat.addEventListener("click", function () {
        let getText = repeatBtn.innerText;
        if (getText == "repeat") {
            repeatBtn.innerText = "repeat_one";
            repetir = true;
        } else {
            repeatBtn.innerText = "repeat";
            repetir = false;
        }
    });
}

// funcion shuffle canción
function shuffle() {
    btnShuffle.addEventListener("click", function () {
        if ($("#random").hasClass("press")) {
            $("#random").removeClass("press");
            rand = false;
        } else {
            $("#random").addClass("press");
            rand = true;
        }
    });
}

// función ajax
function ajax() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../../data.json');
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            discos = data.discos;
            let totalDiscos = data.discos.length;
            addTitle(data.banda);
            // mostrar las cartulas de los discos
            for (let i = 0; i < totalDiscos; i++) {
                caratula(discos[i].img, discos[i].id);
                document.querySelector('#' + discos[i].id).addEventListener('click', function () {
                    // mostrar las canciones del disco sobre el que se ha hecho click
                    canciones = discos[i].canciones;
                    let rutaImg = '../../assets/img/' + discos[i].img;
                    imgCancion.src = rutaImg;
                    document.querySelector('#' + discos[i].id).animate({
                        transform: 'scale(0.6) rotateZ(11520deg)',
                        border: '5px solid white',
                    }, 1000);
                    reproducirPrimera();
                    if ($('h3').length) {
                        $('h3').remove();
                        let totalCanciones = discos[i].canciones;
                        for (let j = 0; j < totalCanciones.length; j++) {
                            const span = document.createElement('h3');
                            span.innerHTML = canciones[j].titulo;
                            caja.appendChild(span);
                            letraDisc.appendChild(caja);
                            span.addEventListener("click", function () {
                                id = j;
                                mostrarNameDisco();
                                reproducir();
                            });
                        }
                    } else {
                        let totalCanciones = discos[i].canciones;
                        for (let j = 0; j < totalCanciones.length; j++) {
                            const span = document.createElement('h3');
                            span.innerHTML = canciones[j].titulo;
                            caja.appendChild(span);
                            letraDisc.appendChild(caja);
                            contLista.removeAttribute("hidden");
                            span.addEventListener("click", function () {
                                id = j;
                                mostrarNameDisco();
                                reproducir();
                            });
                        }
                    }
                })
            }
        }
    }
}

// función para mostrar el nombre del grupo
function nameGroup(name) {
    let nombre = document.createElement('h2');
    nombre.setAttribute('id', name);
    nombre.innerHTML = name;
    tituloGroup.appendChild(nombre);
}

// función para mostrar las caratulas
function caratula(route, name) {
    let ruta = '../../assets/img/' + route;
    var container = document.createElement('figure');
    var href = document.createElement('a');
    container.setAttribute('class', 'shadow');
    let caratula = document.createElement('img');
    caratula.src = ruta;
    caratula.setAttribute('id', name);
    caratula.setAttribute('class', 'imgDisc');
    href.setAttribute('href', '#ref');
    href.appendChild(caratula);
    container.appendChild(href);
    contenedorCarrusel.appendChild(container);
}

// function con la que añadimos el nombre de la banda para mostrarlo en el DOM
function addTitle(name) {
    let nombre = document.createElement('h1');
    nombre.setAttribute('id', 'titulo');
    nombre.innerHTML = name;
    nombreGrupo.appendChild(nombre);
}

//funcion para hacer el slow al dar un album
function slowDown() {
    $(document).on('click', 'a[href^="#ref"]', function (event) {
        console.log('has pulsado');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });
}

// función para elegir la cancion
function mostrarNameDisco() {
    let titulo = canciones[id].titulo;
    let ruta = canciones[id].route;
    $(tituloCancion).html(titulo);
    audio.src = "../../assets/sound/" + ruta;
}

// función para iniciar la reproducción desde primera canción
function reproducirPrimera() {
    id = 0;
    repetir = false;
    repeatBtn.innerText = "repeat";
    let titulo = canciones[0].titulo;
    let ruta = canciones[0].route;
    $(tituloCancion).html(titulo);
    audio.src = "../../assets/sound/" + ruta;
    if (context.state === 'suspended') {
        context.resume().then(function () {
            reproducir();
        });
    }
    $('#play').addClass('none');
    if ($('#pause').hasClass('none')) {
        $('#pause').removeClass('none');
    }
    reproducir();
}

function reproducir() {
    audio.play();
    $('.screen_img').addClass('animar_disco');
    $('#play').addClass('none');
    if ($('#pause').hasClass('none')) {
        $('#pause').removeClass('none');
    }
}

function initMp3Player() {
    context = new AudioContext();
    analyser = context.createAnalyser();
    canvas = document.getElementById('analyser_render');
    ctx = canvas.getContext('2d');
    my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    my_gradient.addColorStop(0, "yellow");
    my_gradient.addColorStop(1, "red");
    source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
    frameLooper();
}

function frameLooper() {
    window.requestAnimationFrame(frameLooper);
    fbc_array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbc_array);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = my_gradient;
    bars = 100;
    for (var i = 0; i < bars; i++) {
        bar_x = i * 3;
        bar_width = 2;
        bar_height = -(fbc_array[i] / 2);
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
    }
}