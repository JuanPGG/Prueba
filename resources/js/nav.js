window.onscroll = function() {myFunction()};

var header = document.getElementById("nav");
var sticky = header.offsetTop+100;

function myFunction() {
   if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
}else{
    header.classList.remove("sticky");
}
}

window.addEventListener('resize',function(){
    if(screen.width){
        cerrado = true;
        enlaces.style.removeProperty('height');
        desplegable.style.removeProperty('display');
    }else{
        cerrado = false;
    }
});

var cerrado = true;
var enlaces = document.getElementById('enlaces');
var desplegar = document.getElementById('desplegar');
var desplegable = document.getElementById('desplegable');

abrir.addEventListener('click', function(){
    menu();
})
var icono = document.getElementById('icono')
function menu(){
    if(cerrado){
        enlaces.style.height = '450px';
        icono.classList.remove('icon-menu');
        icono.className = 'icon-cross';
        cerrado = false;
    }else{
        icono.classList.remove('icon-cross');
        icono.className = 'icon-menu';
        enlaces.style.removeProperty('height');
        cerrado = true;
    }
}
var desp = true;
desplegar.addEventListener('click', function(ev){
    despl();
    ev.preventDefault()
})

function despl(){
    if(desp){
        desplegar.classList.remove('icon-circle-down');
        desplegar.className = 'icon-circle-up';
        desplegable.style.display = 'block';
        desp = false;
    }else{
        desplegar.classList.remove('icon-circle-up');
        desplegar.className = 'icon-circle-down';
        desplegable.style.removeProperty('display');
        desp = true;
    }
    scroll()
}