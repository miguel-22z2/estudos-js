const expressao = "4 + 2";

const arrayComValores = expressao.split(" ");

console.log(arrayComValores);

for (let i = 0; i < arrayComValores.length; i++) {

    if (arrayComValores[i] == "+") {
        const numero1 = Number(arrayComValores[i - 1]);
        const numero2 = Number(arrayComValores[i + 1]);

        console.log(numero1 + numero2);
    } else {
        continue;
    }

}