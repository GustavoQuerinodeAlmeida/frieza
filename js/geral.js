document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("modo");

    // pega tema salvo
    let temaSalvo = localStorage.getItem("theme");

    // função pra trocar ícone
    function atualizarIcone() {
        if (document.body.classList.contains("dark-mode")) {
            botao.innerHTML = '<i data-lucide="sun"></i>';
        } else {
            botao.innerHTML = '<i data-lucide="moon"></i>';
        }

        lucide.createIcons(); // renderiza o ícone
    }

    // se existir tema salvo
    if(temaSalvo === "dark"){
        document.body.classList.add("dark-mode");
    }
    else if(temaSalvo === "light"){
        document.body.classList.remove("dark-mode");
    }
    else{
        // primeira visita → usa modo do navegador
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            document.body.classList.add("dark-mode");
        }
    }

    // atualiza ícone ao carregar
    atualizarIcone();

    // botão
    if(botao){

        botao.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if(document.body.classList.contains("dark-mode")){
                localStorage.setItem("theme","dark");
            }else{
                localStorage.setItem("theme","light");
            }

            atualizarIcone(); // troca ícone
        });

    }

});