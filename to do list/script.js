const localResultado = document.getElementById("localResultado");
const inputTarefa = document.getElementById("inputTarefa");
const buttonSalvar = document.getElementById("buttonSalvar");

let contadorAtribuicao = 0;

localResultado.innerHTML = ``;

function salvarTarefa(nomeTarefa) {
   
    const contadorAtribuicaoFormatado = String(contadorAtribuicao);
    localStorage.setItem(contadorAtribuicaoFormatado, nomeTarefa);

    contadorAtribuicao++
}

function chamarFunctions() {

    salvarTarefa(inputTarefa.value);
    listarTarefas();
}

function listarTarefas() {

    for (let i = 0; i < localStorage.length; i++) {

        const indexFormatado = String(i);

        const elementoNovo = document.createElement("li");
        elementoNovo.id = i + ":tarefa";

        elementoNovo.textContent = `${localStorage.getItem(indexFormatado)}`;

        const buttonConcluir = document.createElement("button");
        buttonConcluir.classList.add("buttons-concluir");
        buttonConcluir.textContent = "Concluir"
        buttonConcluir.id = i + ":Concluir"

        const buttonDeletar = document.createElement("button");
        buttonDeletar.classList.add("buttons-excluir");
        buttonDeletar.textContent = "Excluir"
        buttonDeletar.id = i + ":Deletar";

        buttonDeletar.addEventListener('click', () => {

            elementoNovo.remove();

        });

        buttonConcluir.addEventListener("click", function() {

            elementoNovo.style.color = "rgb(18, 183, 40)";

        });

        elementoNovo.addEventListener("click", () => {

            buttonConcluir.remove();
            buttonDeletar.remove();

        })

        localResultado.appendChild(elementoNovo);
        elementoNovo.appendChild(buttonConcluir);
        elementoNovo.appendChild(buttonDeletar);
    }
}
