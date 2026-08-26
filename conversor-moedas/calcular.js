const dolarEmReal = 5.14;
const realEmDolar = 1.0;
const euroEmReal = 6.0;
const realEmEuro = 1.0;

const inputQuantia = document.getElementById("inputQuantia");
const selectQuantia = document.getElementById("selectConverter");
const buttonEnvieDinheiro = document.getElementById("buttonEnvieDinheiro");
const localResultado = document.getElementById("localResultado");

buttonEnvieDinheiro.addEventListener('click', () => {

    const valorQuantiaFormatada = Number(inputQuantia.value);

    if (selectQuantia.value == "usdConverter") {

        const valorDolar = dolarEmReal * valorQuantiaFormatada;

        localResultado.textContent = `${valorDolar}`

        localResultado.showModal();
    }   

});