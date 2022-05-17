$(document).ready(main);

// función main
function main() {
    showRegistro();
    showLogin();
    getDataLogin();
    getDataRegistro();
    returnLogin();
}

// función mostrar || ocultar
function showElement(element, mostrar) {
    element.toggleClass(mostrar);
}

// función mostrar || ocultar con evento click

function showHideElement(element) {
    element.click(() => {
        showElement($('.registro'), 'ocultar');
        showElement($('.login'), 'ocultar');
    })
}

// función mostrar registro y ocultar login
function showRegistro() {
    showHideElement($('#txtRegistrar'));
}

// función mostrar registro
function showLogin() {
    showHideElement($('#txtLogin'));
}

// función obtener los datos introducicos en el login
function getDataLogin() {
    $('#subBtn').click((e) => {
        e.preventDefault();
        console.log('Has hecho click');
        if ($('#email').val() != "" && $('#password').val() != "") {
            let data = {
                email   : $('#email').val(),
                password: $('#password').val(),
                tag     : 'login'
            };
            console.log(data);
            // TODO Poner los mensajes por id
            $('.mensaje_error').addClass('ocultar');
            user(data);
            // location.reload(true);
            setTimeout(() => {
                $(location).attr('href', '../../index.php');
            },1000);

        } else {
            console.log('estas en esta parte');
            // TODO Poner los mensajes por id
            $('.mensaje_error').removeClass('ocultar');
        }
    });
}

// función para reslizar nuevos registros de usuarios
function getDataRegistro() {
    $('#subBtnRegistro').click((e) => {
        e.preventDefault();
        console.log('Has hecho click');
        if ($('#emailRegistro').val() != "" && $('#passwordRegistro').val() != "" && $('#passwordRepeat').val() != "") {

            if ($('#passwordRegistro').val() === $('#passwordRepeat').val()) {

                let data = {
                    email   : $('#emailRegistro').val(),
                    password: $('#passwordRegistro').val(),
                    tag     : "registro"
                };
                console.log(data);
                // TODO Poner los mensajes por id
                $('.mensaje_error').addClass('ocultar');
                setTimeout(function(){
                     $('.mensaje_correcto').removeClass('ocultar');
                    }, 500);
                    setTimeout(function(){
                        $('.mensaje_correcto').removeClass('ocultar');
                       }, 500);
                user(data);
                
                
            } else {

                // TODO Poner los mensajes por id

                $('.mensaje_correcto').addClass('ocultar');
                $('.mensaje_error').removeClass('ocultar');

                let data = '';

                return data;

            }

        } else {

            console.log('estas en esta parte');
            console.log($('#passwordRegistro').val() + ' , ' + $('#passwordRepeat').val());
            $('.mensaje_error').removeClass('ocultar');

        }
    });
}

function user(data) {

    let url = '../../controller/controllerUser.php';

    $.post(url, data, function(response) {
        console.log(data);
        console.log(response);
        $('.mensaje_correcto').html(response);
        $('form').trigger('reset');

    });

}

function returnLogin(){
    if(!$('.mensaje_correcto').hasClass('ocultar')){
        showElement($('.registro'), 'ocultar');
        showElement($('.login'), 'ocultar');
    }
}