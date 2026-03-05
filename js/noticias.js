document.addEventListener("DOMContentLoaded", function () {

    const botoes = document.querySelectorAll(".ler-mais");

    botoes.forEach(botao => {

        botao.addEventListener("click", function (event) {
            event.preventDefault();

            const card = this.closest(".card-noticia");
            const conteudo = card.querySelector(".conteudo-extra");

            // usa classList em vez de style
            conteudo.classList.toggle("ativo");

            if (conteudo.classList.contains("ativo")) {
                this.textContent = "Ler menos";
            } else {
                this.textContent = "Ler mais";
            }
        });

    });

    // 🔥 ABRIR AUTOMATICAMENTE SE TIVER #
    if (window.location.hash) {

        const id = window.location.hash.substring(1);
        const noticia = document.getElementById(id);

        if (noticia) {

            const conteudo = noticia.querySelector(".conteudo-extra");
            const botao = noticia.querySelector(".ler-mais");

            if (conteudo && botao) {
                conteudo.classList.add("ativo");
                botao.textContent = "Ler menos";
            }
        }
    }

});

