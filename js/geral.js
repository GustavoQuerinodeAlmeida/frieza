// botão modo escuro
const botao = document.getElementById("modo");

if(botao){

    // verifica modo salvo
    if(localStorage.getItem("modo") === "dark"){
        document.body.classList.add("dark");
        botao.textContent = "☀️";
    }

    botao.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            botao.textContent = "☀️";
            localStorage.setItem("modo", "dark");
        } 
        else{
            botao.textContent = "🌙";
            localStorage.setItem("modo", "light");
        }

    });

}