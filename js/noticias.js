const botoes = document.querySelectorAll(".ler-mais");

botoes.forEach(botao => {
    botao.addEventListener("click", function(event) {
        event.preventDefault();

        const card = this.closest(".card-noticia");
        const conteudo = card.querySelector(".conteudo-extra");

        if (conteudo.style.display === "block") {
            conteudo.style.display = "none";
            this.textContent = "Ler mais";
        } else {
            conteudo.style.display = "block";
            this.textContent = "Ler menos";
        }
    });
});
