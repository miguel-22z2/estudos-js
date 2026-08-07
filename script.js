
const buttonTeste = document.getElementById("buttonTeste")

function trocarCor() {

    if (buttonTeste.style.backgroundColor == "black"){
        buttonTeste.style.backgroundColor = "white";
    } else {
        buttonTeste.style.backgroundColor = "black"
    }
    
}

buttonTeste.addEventListener("click", trocarCor);