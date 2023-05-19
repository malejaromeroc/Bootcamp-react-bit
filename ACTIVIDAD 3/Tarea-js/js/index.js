const counter = document.querySelector("#counter")
const btsumar = document.querySelector("#btsumar")
const btresetear = document.querySelector("#btresetear")
const btrestar = document.querySelector("#btrestar")
let contador=0;
const mcontador =document.querySelector("#mcontador")


btsumar.addEventListener ("click", sumarUno )
btresetear.addEventListener ("click", resetear )
btrestar.addEventListener ("click", restarUno )


function sumarUno() {
    contador = contador+1
    mcontador.innerHTML=contador
}

function restarUno () {
    contador = contador-1
    mcontador.innerHTML=contador
}

function resetear () {
    contador = contador*0
    mcontador.innerHTML=contador
}