document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("modo");

    // Aplica tema salvo
    const theme = localStorage.getItem("theme");
    if(theme === "dark"){
        document.body.classList.add("dark-mode");
        if(botao) botao.textContent = "☀️";
    }

    // Evento do botão
    if(botao){
        botao.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if(document.body.classList.contains("dark-mode")){
                botao.textContent = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                botao.textContent = "🌙";
                localStorage.setItem("theme", "light");
            }
        });
    }
});