const vida = document.getElementById("vida");
const audio = document.getElementById("audio");
const gojoVivo = document.getElementById("gojoVivo");
const gojoMuerto = document.getElementById("gojoMuerto");
const win = document.getElementById("win");
const gameplay = document.getElementById("gameplay");
let i= 100;
function gojomuerto(){
    gojoVivo.style= "display: none;"
    gojoMuerto.style= "display: block;"

}
function contadorVida() {
    if(i <=1){
        vida.style = "    width: "+0+"%;";     
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
        //i= i-50;
        i--;
        vida.style = "    width: "+i+"%;";
    }
}
