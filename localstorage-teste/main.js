const localResultado = document.getElementById("localResultado");
const inputTarefa = document.getElementById("inputTarefa");
const buttonSalvar = document.getElementById("buttonSalvar");

let contadorAtribuicao = 0;

localResultado.innerHTML = ``;

function salvarTarefa(nomeTarefa) {

    const contadorAtribuicaoFormatado = String(contadorAtribuicao);
    localStorage.setItem(contadorAtribuicaoFormatado, nomeTarefa);

    contadorAtribuicao++;

}

function chamarFunctions() {

    salvarTarefa(inputTarefa.value);
    listarTarefas();

}

function listarTarefas() {

    for (let i = 0; i < localStorage.length; i++) {

        const indexFormatado = String(i);

        const elementoNovo = document.createElement("li");

        elementoNovo.textContent = `${localStorage.getItem(indexFormatado)}`;

        localResultado.appendChild(elementoNovo);

    }

}