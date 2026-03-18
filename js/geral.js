document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("modo");
    const logo = document.getElementById("logo");

    let temaSalvo = localStorage.getItem("theme");

    function atualizarIcone() {
        if (!botao) return;

        if (document.body.classList.contains("dark-mode")) {
            botao.innerHTML = '<i data-lucide="sun"></i>';
        } else {
            botao.innerHTML = '<i data-lucide="moon"></i>';
        }

        lucide.createIcons();
    }

    function atualizarLogo() {
        if (!logo) return;

        if (document.body.classList.contains("dark-mode")) {
            logo.src = "../assets/img/lohead2.png"; // clara
        } else {
            logo.src = "../assets/img/eniacpreto.png"; // escura
        }
    }

    if (temaSalvo === "dark") {
        document.body.classList.add("dark-mode");
    } else if (temaSalvo === "light") {
        document.body.classList.remove("dark-mode");
    } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark-mode");
        }
    }

    atualizarIcone();
    atualizarLogo();

    if (botao) {
        botao.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }

            atualizarIcone();
            atualizarLogo();
        });
    }

});