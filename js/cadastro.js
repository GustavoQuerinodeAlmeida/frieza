const form = document.getElementById("formCadastro");
const botao = form.querySelector("button[type='submit']");
const emailInput = document.getElementById("emailCadastro");
const senhaInput = document.getElementById("senhaCadastro");
const confirmarInput = document.getElementById("confirmarSenha");
const erro = document.getElementById("erroSenha");

botao.addEventListener("click", function (event) {
    erro.textContent = "";
    emailInput.parentElement.style.borderColor = "";
    senhaInput.parentElement.style.borderColor = "";
    confirmarInput.parentElement.style.borderColor = "";

    const email = emailInput.value.trim();

    if (email !== "" && !email.endsWith("@eniac.edu.br")) {
        erro.textContent = "Apenas e-mails institucionais (@eniac.edu.br) são permitidos.";
        emailInput.parentElement.style.borderColor = "#ff4d4d";
        event.preventDefault();
        return;
    }

    if (senhaInput.value.length > 0 && senhaInput.value.length < 8) {
        erro.textContent = "A senha deve ter no mínimo 8 caracteres.";
        senhaInput.parentElement.style.borderColor = "#ff4d4d";
        event.preventDefault();
        return;
    }

    if (senhaInput.value !== confirmarInput.value) {
        erro.textContent = "As senhas não coincidem.";
        senhaInput.parentElement.style.borderColor = "#ff4d4d";
        confirmarInput.parentElement.style.borderColor = "#ff4d4d";
        event.preventDefault();
        return;
    }
});