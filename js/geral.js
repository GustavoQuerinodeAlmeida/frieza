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

// ==========================================
// LÓGICA DO DROPDOWN DE NOTIFICAÇÕES
// ==========================================
const btnNotificacao = document.getElementById('btnNotificacao');
const dropdownNotificacao = document.getElementById('dropdownNotificacao');

if (btnNotificacao && dropdownNotificacao) {
    // Abre ou fecha ao clicar no sino
    btnNotificacao.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que o evento de fechar a tela seja acionado na mesma hora
        dropdownNotificacao.classList.toggle('ativo');
    });

    // Fecha o dropdown se o utilizador clicar em qualquer outro lugar da página
    document.addEventListener('click', function(event) {
        if (!dropdownNotificacao.contains(event.target) && event.target !== btnNotificacao) {
            dropdownNotificacao.classList.remove('ativo');
        }
    });
}