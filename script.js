const rgb = document.getElementById("rgb");

const cores = [

    "red",
    "green",
    "blue",
    "yellow",
    "cyan",
    "magenta",
    "white"

];

let indice = 0;

function trocarCor(){

    rgb.style.background = cores[indice];

    rgb.style.boxShadow = `0 0 50px ${cores[indice]}`;

    indice++;

    if(indice >= cores.length){

        indice = 0;

    }

}

trocarCor();

setInterval(trocarCor,1000);