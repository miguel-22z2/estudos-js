const numero1Input = document.getElementById("numero1Input");
const numero2Input = document.getElementById("numero2Input");
const somar = document.getElementById("botaoSomar");
const resultado = document.getElementById("resultado");
let valor1Input = ""
let valor2Input = ""

function botaoSomar() {
    valor1Input = Number(numero1Input.value);
    valor2Input = Number(numero2Input.value);

    resultado.textContent = `${valor1Input + valor2Input}`;
}


