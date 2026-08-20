const botao = document.getElementById("meuBotao");
const inputNome = document.getElementById("nomeInput");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    const nome = inputNome.value;
    mensagem.textContent = `Olá, ${nome}! Tudo bem?`;
});

 