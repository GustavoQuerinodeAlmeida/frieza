document.addEventListener("DOMContentLoaded", function () {

const container = document.querySelector(".noticias");

// botão de rolar notícias
const nextBtn = document.getElementById("nextBtn");

if(nextBtn){
nextBtn.addEventListener("click", () => {
    container.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});
}

// botão modo escuro
const botao = document.getElementById("modo");

if(botao){
botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
}

});
