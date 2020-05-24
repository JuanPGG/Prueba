var nav =document.getElementById('nav');
var img = document.getElementById('texto');
var p = document.getElementById('par');
var h2 = document.getElementById('tt')
var left = document.getElementById('left');
var right = document.getElementById('right');
var left1 = document.getElementById('left1');
var left2 = document.getElementById('left2');
var left3 = document.getElementById('left3');
var plus1 = document.getElementById('plus1');
var plus2 = document.getElementById('plus2');
var plus3 = document.getElementById('plus3');
var arriba = document.getElementById('arriba');
var menu = document.getElementById('enlaces');
var abrir = document.getElementById('open');


var cerrado = true;
var bool1 =false;
var bool2 = false;
var bool3 = false;
left1.addEventListener('click', function(ev){
    leftOne(ev);
})
left2.addEventListener('click', function(ev){
    leftTwo(ev);
})
left3.addEventListener('click', function(ev){
    leftThree(ev);
})
function leftOne(ev){
    console.log(ev.target.parentElement);
    if(bool1 == false){
        plus1.className = ('icon-minus');
        plus1.classList.remove('icon-plus');
        document.getElementById('contp1').style.background = 'red';
        bool1 = true;
        bool2 = true;
        bool3 = true;
        leftTwo(ev);
        leftThree(ev);
        document.getElementById('oculto1').style.display = 'flex';
    }else if(bool1 == true){
        plus1.className = ('icon-plus');
        plus1.classList.remove('icon-minus');
        document.getElementById('contp1').style.background = '#595858';
        bool1 = false;
        document.getElementById('oculto1').style.display = 'none';
    }
}
function leftTwo(ev){
    if(bool2 == false){
        plus2.className = ('icon-minus');
        plus2.classList.remove('icon-plus');
        document.getElementById('contp2').style.background = 'red';
        bool2 = true;
        bool1 = true;
        bool3 = true;
        leftOne(ev);
        leftThree(ev);
        document.getElementById('oculto2').style.display = 'flex';
    }else if(bool2 == true){
        plus2.className = ('icon-plus');
        plus2.classList.remove('icon-minus');
        document.getElementById('contp2').style.background = '#595858';
        bool2 = false;
        document.getElementById('oculto2').style.display = 'none';
    }
}
function leftThree(ev){
 if(bool3 == false){
    plus3.className = ('icon-minus');
    plus3.classList.remove('icon-plus');
    document.getElementById('contp3').style.background = 'red';
    bool3 = true;
    bool1=true;
    bool2 =true;
    leftOne(ev);
    leftTwo(ev);
    document.getElementById('oculto3').style.display = 'flex';
}else if(bool3 == true){
    plus3.className = ('icon-plus');
    plus3.classList.remove('icon-minus');
    document.getElementById('contp3').style.background = '#595858';
    bool3 = false;
    document.getElementById('oculto3').style.display = 'none';
}
}

function scroll(){
    var desp = window.pageYOffset;
    console.log(desp);
    if(desp <= 145){
        menu.style.top = '145px';
    }else{
        menu.style.top = '100px';
    }
    if(desp >= 80){
        left.style.transition= "1s";
        left.style.transform = 'translateX(0px)';
        left.style.opacity = '1';
        left.style.position = 'relative';
        right.style.transition= "1s";
        right.style.transform = 'translateX(0px)';
        right.style.opacity = '1';
    }
    if(desp >= 885){
        arriba.style.transition = '1s';
        arriba.style.transform = 'translateX(0px)';
        arriba.style.opacity = '1';
    }else if(desp <= 870){
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
window.addEventListener('load', function(){
    p.style.transition = '1s';
    p.style.transform = 'translateY(-10px)';
    p.style.opacity = '1';
    h2.style.transition = '1s';
    h2.style.transform = 'translateY(-10px)';
    h2.style.opacity = '1';
    scroll();
})
window.onscroll = function() {myFunction()};

var header = document.getElementById("nav");
var sticky = header.offsetTop+100;

function myFunction() {
   if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    } else {
    header.classList.remove("sticky");
    }
}
window.addEventListener('resize',function(){
    if(screen.width>=700){
        cerrado=true;
    }
});
function apertura(){
    if(cerrado === true){
        menu.style.height = '600px';
        cerrado = false;
    }else{
        menu.style.height = '0px';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}
window.addEventListener('click', function(e){
    if(cerrado==false){
        var span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.height = '0px';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
abrir.addEventListener('click', function(){
    apertura();
});