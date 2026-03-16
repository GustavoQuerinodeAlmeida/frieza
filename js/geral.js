document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("modo");
    
    // pega tema salvo
    let temaSalvo = localStorage.getItem("theme");
    
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
    
    // botão
    if(botao){
    
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
    
    });
