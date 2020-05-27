var img = document.getElementById('img');
var texto = document.getElementById('texto');
var arriba = document.getElementById('arriba');
var abrir = document.getElementById('open');


function scroll(){
    var desp = window.pageYOffset;
    console.log(desp);
    if(desp >= 200){
        img.style.transition = '1s';
        img.style.opacity = '1';
        img.style.transform = 'translateY(0px)';
    }
    if(desp >= 400){
        texto.style.transition = '1s';
        texto.style.opacity = '1';
        texto.style.transform = 'translateY(0px)';
    }
    if(desp >= 1150){
        arriba.style.transition = '1s';
        arriba.style.transform = 'translateX(0px)';
        arriba.style.opacity = '1';
    }else if(desp <= 1000){
        arriba.style.transform = 'translateX(100px)';
        arriba.style.opacity = '0';
    }
}
arriba.addEventListener('click', function(){
    volverArriba(300);
});
function volverArriba(scrollDuracion){
    var scrollStep = -window.pageYOffset / (scrollDuracion / 15), 
    scrollI = setInterval(function(){
        if(window.pageYOffset != 0){
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollI);
    }, 15);
}
window.addEventListener('scroll', function(){
    scroll();
})