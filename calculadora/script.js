const localResult = document.getElementById("localResultado");
const buttonCalcular = document.getElementById("botaoIgual");

let valorTotal = 0;

function calcularVezesDivisao() {
    const expressao = localResult.textContent;
    const arrayComValores = expressao.split(" ");

    let i = 0;
    while (i < arrayComValores.length) {

        if (arrayComValores[i] == "*" || arrayComValores[i] == "/") {
            const valorAnterior = Number(arrayComValores[i - 1]);
            const valorProximo = Number(arrayComValores[i + 1]);

            if (arrayComValores[i] == "*") {
                valorTotal = valorAnterior * valorProximo;
            } else if (arrayComValores[i] == "/") {
                valorTotal = valorAnterior / valorProximo;
            }

            arrayComValores.splice(i - 1, 3, valorTotal);
            i--;
        } else {
            i++;
        }
    }
}

function calcular() {

    calcularVezesDivisao();

    const expressao = localResult.textContent;
    const arrayComValores = expressao.split(" ");

    let i = 0;
    while (i < arrayComValores.length) {
        
        if (arrayComValores[i] == "+" || arrayComValores[i] == "-") {
            const valorAnterior = Number(arrayComValores[i - 1]);
            const valorProximo = Number(arrayComValores[i + 1]);

            if (arrayComValores[i] == "+") {
                valorTotal = valorAnterior + valorProximo;
            } else if (arrayComValores[i] == "-") {
                valorTotal = valorAnterior - valorProximo;
            }

            arrayComValores.splice(i - 1, 3, valorTotal);

            i--;
        } else {
            i++;
        }
    }

    const localResultado = document.getElementById("localResultado").textContent = valorTotal;
}

buttonCalcular.addEventListener("click", calcular);