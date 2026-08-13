
/*let numero1 = Number(window.prompt("Digite o 1º número:"));
let numero2 = Number(window.prompt("Digite o 2º número:"));
window.alert(numero1 ** numero2);

if (window.confirm("Quer sair do site?")) {

}*/

let numero1 = Number(window.prompt("Primeiro numero"));

let operador = window.prompt("Digite o operador:");

let numero2 = Number(window.prompt("Segundo numero"));

let resultado;

if (operador == "+") {
    resultado = numero1 + numero2
} else if (operador == "-") {
    resultado = numero1 - numero2
} else if (operador == "*") {
    resultado = numero1 * numero2
} else if (operador == "/") {
    resultado =  numero1 / numero2
}

window.alert(resultado);

if (window.confirm("Quer sai do site?")) {
    window.location.href = "https://www.youtube.com/watch?v=KkGVmN68ByU&list=RDKkGVmN68ByU&start_radio=1&pp=0gcJCfoCOCosWNin"
} 

