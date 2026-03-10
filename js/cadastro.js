const form = document.getElementById("formCadastro");
const botao = form.querySelector("button[type='submit']");
const emailInput = document.getElementById("emailCadastro");
const senhaInput = document.getElementById("senhaCadastro");
const confirmarInput = document.getElementById("confirmarSenha");
const erro = document.getElementById("erroSenha");

botao.addEventListener("click", function (event) {
    // Limpa os erros anteriores
    erro.textContent = "";
    emailInput.parentElement.style.borderColor = "";
    senhaInput.parentElement.style.borderColor = "";
    confirmarInput.parentElement.style.borderColor = "";

    const email = emailInput.value.trim();

    // 1. Validação do Domínio ENIAC
    // Verifica se o campo não está vazio e se NÃO termina com @eniac.edu.br
    if (email !== "" && !email.endsWith("@eniac.edu.br")) {
        erro.textContent = "Apenas e-mails institucionais (@eniac.edu.br) são permitidos.";
        emailInput.parentElement.style.borderColor = "#ff4d4d";
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // 2. Validação de tamanho da senha
    if (senhaInput.value.length > 0 && senhaInput.value.length < 8) {
        erro.textContent = "A senha deve ter no mínimo 8 caracteres.";
        senhaInput.parentElement.style.borderColor = "#ff4d4d";
        event.preventDefault();
        return;
    }

    // 3. Validação de senhas iguais
    if (senhaInput.value !== confirmarInput.value) {
        erro.textContent = "As senhas não coincidem.";
        senhaInput.parentElement.style.borderColor = "#ff4d4d";
        confirmarInput.parentElement.style.borderColor = "#ff4d4d";
        event.preventDefault();
        return;
    }
});