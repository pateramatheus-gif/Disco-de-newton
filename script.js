
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

setInterval(() => {

    rgb.style.backgroundColor = cores[indice];
    rgb.style.boxShadow = `0 0 30px ${cores[indice]}`;

    indice++;

    if(indice >= cores.length){
        indice = 0;
    }

},1000);
