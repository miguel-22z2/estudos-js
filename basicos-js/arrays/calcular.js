const elementoExpressao = document.getElementById("inputExpressao");
const fazerExpressao = document.getElementById("fazerExpressao");

let valorTotal = 0;

function calcular() {

    const expressao = elementoExpressao.value;

    const arrayComValores = expressao.split(" ");

    console.log(arrayComValores);

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

function chamarCalcular(){

    calcular();

}