const senha = document.getElementById("senha");
const olho = document.getElementById("img-privacidade");

olho.addEventListener("click", function() {

    if (senha.type === "password") {
        senha.type = "text";
       olho.src = "c:/Users/mayara.malini/Documents/img-projeto-dt/Eye.png";
    } else {
        senha.type = "password";
       olho.src = "c:/Users/mayara.malini/Documents/img-projeto-dt/Vector.png";
    }
});