let contador = 0;

const botaoMais = document.getElementById('botaoMais');
const botaoMenos = document.getElementById('botaoMenos');
const labelContador = document.getElementById('contador');

botaoMais.addEventListener("click", () => {
    contador++;
    labelContador.textContent = contador;
});

botaoMenos.addEventListener("click", () => {
    contador--;
    labelContador.textContent = contador;
});
