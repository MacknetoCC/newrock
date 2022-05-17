$(document).ready(main);

function main() {
    menu();
    cancel();
    logout();
    logoutIndex();

}

// ocultar el botón de hamburguesa y mostrar los enlaces
function menu() {
    $('.icon_menu').click(()=>{
        console.log('Has pulsado');
        $('.icon_menu').animate({opacity:0},500);
        $('.nav_link').animate({opacity:1,right:"10%"},1000);
    })
}

function cancel(){
    $('.cancel').click(()=>{
            $('.nav_link').animate({right:"-50rem"},500);
            $('.icon_menu').animate({opacity:1},1000);
        
    });
}

function logout() {
    $('#linkLogout').click(()=>{
        
        let data = {
            target:'destroy'
        };
        let url = '../../controller/controllerUser.php';

        $.post(url, data, function(response) {
            // window.location.replace("../../index.php");
            console.log(response);


        })

    })
}

function logoutIndex(){
    $('#linkLogoutIndex').click(()=>{
        console.log('has hecho click en Destroy');
        let data = {
            tag:'destroy'
        };
        let url = './controller/controllerUser.php';

        $.post(url, data, function(response) {
            // window.location.replace("../../index.php");
            console.log(response);
            location.reload(true);
        })

    })
}
