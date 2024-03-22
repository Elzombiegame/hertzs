const vida = document.getElementById("vida");
let i= 100;
function contadorVida() {
    if(i <=0){

    }else{
        i--;
        vida.style = "    width: "+i+"%;";
    }
    
}
