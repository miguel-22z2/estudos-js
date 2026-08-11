const inputPeso = document.getElementById("inputPeso");
const inputAltura = document.getElementById("inputAltura");
const botaoCalcular = document.getElementById("botaoCalcular");
const labelValorIMC = document.getElementById("labelValorIMC");
const labelClassificacao = document.getElementById("labelClassificacao");

function calcularIMC() {

    const pesoFormatado = Number(inputPeso.value);
    const alturaFormatada = Number(inputAltura.value);

    const valorIMC = pesoFormatado / (alturaFormatada * alturaFormatada);

    labelValorIMC.textContent = `Seu IMC é: ${valorIMC.toFixed(2)}`;

    if (valorIMC < 18.5) {
        labelClassificacao.textContent = "Abaixo do peso";
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        labelClassificacao.textContent = "Peso normal";
    } else if (valorIMC >= 25.0 && valorIMC <= 29.9) {
        labelClassificacao.textContent = "Sobrepeso";
    } else if (valorIMC >= 30.0 && valorIMC <= 34.9) {
        labelClassificacao.textContent = "Obesidade Grau I";
    } else if (valorIMC >= 35.0 && valorIMC <= 39.9) {
        labelClassificacao.textContent = "Obesidade Grau II";
    } else {
        labelClassificacao.textContent = "Obesidade Grau III / Gravida";
    }

}

botaoCalcular.addEventListener("click", calcularIMC);