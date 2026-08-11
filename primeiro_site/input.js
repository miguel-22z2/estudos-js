// pegando elementos

/*const inputTexto = document.getElementById("inputTexto");
const localResultado = document.getElementById("localResultado");
const buttonMostrar = document.getElementById("buttonMostrar");

let valorInput = "";

function mostrarTexto() {

    valorInput = inputTexto.value;

    localResultado.innerHTML = `<strong style="color: blue;">${valorInput}</strong>`;

}

buttonMostrar.addEventListener('click', mostrarTexto);*/


const inputnumero1 = document.getElementById("inputnumero1");
const inputnumero2 = document.getElementById("inputnumero2");
const buttonsomar = document.getElementById("buttonsomar");
const buttonsub = document.getElementById("buttonsub");
const buttonmult = document.getElementById("buttonmult");
const buttondiv = document.getElementById("buttondiv");
let valorInput1 = ""
let valorInput2 = ""

function somarNumero() {

    valorInput1 = inputnumero1.value;
    valorInput2 = inputnumero2.value;

    let valorFormatado1 = Number(valorInput1);
    let valorFormatado2 = Number(valorInput2);

    const localResultado = document.getElementById("localResultado");

    localResultado.innerHTML = `<strong>${valorFormatado1 + valorFormatado2}</strong>`
}

function subnumero(){
    valorInput1 = inputnumero1.value;
    valorInput2 = inputnumero2.value;

   let valorFormatado1 = Number(valorInput1);
   let valorFormatado2 = Number(valorInput2);
   
   const localResultado = document.getElementById("localResultado");

   localResultado.innerHTML = `<strong>${valorFormatado1 - valorFormatado2}</strong>`
}

function multiNumero(){

    valorInput1 = inputnumero1.value;
    valorInput2 = inputnumero2.value;

    let valorFormatado1 = Number(valorInput1);
    let valorFormatado2 = Number(valorInput2);

    const localResultado = document.getElementById("localResultado");

    localResultado.innerHTML = `<strong>${valorFormatado1 * valorFormatado2}</strong>`

}

function divNumero(){

    valorInput1 = inputnumero1.value;
    valorInput2 = inputnumero2.value;

    let valorFormatado1 = Number(valorInput1);
    let valorFormatado2 = Number(valorInput2);

    const localResultado = document.getElementById("localResultado");

    localResultado.innerHTML = `<strong>${valorFormatado1 / valorFormatado2}</strong>`
}


buttonsomar.addEventListener("click", somarNumero)
buttonsub.addEventListener("click", subnumero)
buttonmult.addEventListener("click", multiNumero)
buttondiv.addEventListener("click", divNumero)