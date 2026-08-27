const dolarEmReal = 5.14;
const realEmDolar = 1.0;
const euroEmReal = 6.0;
const realEmEuro = 1.0;

const inputQuantia = document.getElementById("inputQuantia");
const selectQuantia = document.getElementById("selectQuantia");
const selectConverter = document.getElementById("selectConverter");
const buttonEnvieDinheiro = document.getElementById("buttonEnvieDinheiro");

const modalResultado = document.querySelector("dialog#localResultado");

buttonEnvieDinheiro.addEventListener("click", () => {

    const valorQuantiaFormatada = Number(inputQuantia.value);

    if (!valorQuantiaFormatada || valorQuantiaFormatada <= 0) {
        alert('Por favor, digite uma quantia válida.');
        return;
    }

    let resultado = 0;

    if (selectQuantia.value === "usdQuantia" && selectConverter.value === "brlConverter") {
        resultado = valorQuantiaFormatada * dolarEmReal;
    }

    else if (selectQuantia.value === "euroQuantia" && selectConverter.value === "brlConverter") {
        resultado = valorQuantiaFormatada * euroEmReal;
    }

    else if (selectQuantia.value === "brlQuantia" && selectConverter.value === "usdConveter") {
        resultado = valorQuantiaFormatada / realEmDolar;
    }

    else if (selectQuantia.value === "brlQuantia" && selectConverter.value === "euroConverter") {
        resultado = valorQuantiaFormatada / realEmEuro;
    }

    else {
        resultado = valorQuantiaFormatada;
    }

    const valorFinalFormatado = resultado.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });

    modalResultado.textContent = `Resultado: ${valorFinalFormatado}`;
    modalResultado.showModal();

    console.log(valorFinalFormatado);
});

