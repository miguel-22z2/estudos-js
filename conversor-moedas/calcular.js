const dolarEmReal = 5.14;
const realEmDolar = 1.0;
const euroEmReal = 6.0;
const realEmEuro = 1.0;

const inputQuantia = document.getElementById("inputQuantia");
const selectConveter = document.getElementById("selectConverter");
const buttonEnvieDinheiro = document.getElementById("buttonEnvieDinheiro");
const localResultado = document.getElementById("localResultado");

buttonEnvieDinheiro.addEventListener('click', () => {

    const valorQuantiaFormatada = Number(inputQuantia.value);

    if (selectQuantia.value == "usdConverter") {

        function buttonEnvieDinheiro(dolarEmReal, valorQuantiaFormatada) {
            const valorDolar = dolarEmReal * valorQuantiaFormatada;
            return valorDolar;
        }

        const valorDolar= 1.0;
        const valorQuantiaFormatada= 5.14;
        const localResultado = buttonEnvieDinheiro(valorQuantiaFormatada, 5.14);

        localResultado.textContent = `${valorDolar}`

        localResultado.showModal();

        console.log(localResultado.toLocaleString("pt-Br", {style: "currency", currency: "BRL"}));


    }

});
