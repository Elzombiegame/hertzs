const vida = document.getElementById("vida");
const audio = document.getElementById("audio");
const gojoVivo = document.getElementById("gojoVivo");
const gojoMuerto = document.getElementById("gojoMuerto");
const win = document.getElementById("win");
const gameplay = document.getElementById("gameplay");
const satoru = document.getElementById("satoru");
const menu = document.getElementById("menu");
const musica = document.getElementById("musica");
const fondo = document.getElementById("fondo");
let i= 100;
let valor;


function jugar(){
    menu.style= "display: none;"
    gameplay.style = "display:block;"
    musica.play();
}
function gojomuerto(){
    gojoVivo.style= "display: none;"
    gojoMuerto.style= "display: block;"

}
function contadorVida() {
    if(i <=1){
        vida.style = "    width: "+0+"%;";   
        fondo.style = "background-image: url(img/fondo.jpg);background-repeat: no-repeat; background-size: cover;"  ;
        musica.pause();

        setTimeout(() => {
            gojomuerto();
        }, 16000);
        audio.play();
        vida.style = "    width: "+0+"%;";     
        setTimeout(() => {
            gameplay.style = "display: none;"
            win.style = "display: block;"
        }, 18000);
    }else{
      // i= i-50;
        i--;
        vida.style = "    width: "+i+"%;";
    }
}

function animacion(){
    satoru.style= "animation: none;"
    if (valor === "izquieda"){
        satoru.style= "animation: movimientoIzquieda 0.5s linear;"
        valor = "derecha";

    }else{
        satoru.style= "animation: movimientoDerecha 0.5s linear;"
        valor = "izquieda";

    }
}