const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");
const botao5 = document.getElementById("botao5");
const botao6 = document.getElementById("botao6");
const botao7 = document.getElementById("botao7");
const botao8 = document.getElementById("botao8");
const botao9 = document.getElementById("botao9");
const botao0 = document.getElementById("botao0");
const botaoMais = document.getElementById("botaoMais");
const botaoMenos = document.getElementById("botaoMenos");
const botaoMultiplicacao = document.getElementById("botaoMultiplicacao");
const botaoDivisao = document.getElementById("botaoDivisao");
const botaoLimpar = document.getElementById("botaoLimpar");
const botaoIgual = document.getElementById("botaoIgual");
const botaoPonto = document.getElementById("botaoPonto");
const botaoPorcentagem = document.getElementById("botaoPorcentagem");
const botaoAC = document.getElementById("botaoAC");
const localResultado = document.getElementById("localResultado");

let totalExpressao = "";

function adicionarBotao(valor) {
    totalExpressao += valor + " ";
    
    atualizarDisplay();
} 

function atualizarDisplay() {
    localResultado.textContent = totalExpressao;
}

function limparDisplay() {
    totalExpressao = "";
    atualizarDisplay();
}



