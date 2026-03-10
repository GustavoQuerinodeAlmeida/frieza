// botão modo escuro
const botao = document.getElementById("modo");

// Verifica se o usuário já tinha escolhido modo escuro
if(localStorage.getItem("modo") === "dark"){
    document.body.classList.add("dark");
    botao.textContent = "☀️";
}

if(botao){
    botao.addEventListener("click", () => {

        // Alterna a classe dark
        document.body.classList.toggle("dark");

        // Se estiver em modo escuro
        if(document.body.classList.contains("dark")){
            botao.textContent = "☀️";
            localStorage.setItem("modo", "dark"); // salva
        } 
        else {
            botao.textContent = "🌙";
            localStorage.setItem("modo", "light"); // salva
        }
    });
}