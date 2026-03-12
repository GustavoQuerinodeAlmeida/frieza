// aplica o tema salvo quando a página carregar
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

const botao = document.getElementById("modo");

if(botao){

    if(localStorage.getItem("theme") === "dark"){
        botao.textContent = "☀️";
    }

    botao.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme","dark");
            botao.textContent = "☀️";
        }else{
            localStorage.setItem("theme","light");
            botao.textContent = "🌙";
        }

    });

}