const formCadastro = document.getElementById("formCadastro");
const emailInput = document.getElementById("emailCadastro");
const senhaInput = document.getElementById("senhaCadastro");
const confirmarInput = document.getElementById("confirmarSenha");
const erro = document.getElementById("erroSenha");

// Adiciona um evento que dispara quando o usuário tenta enviar o formulário
formCadastro.addEventListener("submit", function (event) {
    // 1. Limpa os erros anteriores (caso o usuário esteja tentando de novo)
    erro.textContent = "";
    senhaInput.parentElement.style.borderColor = "";
    confirmarInput.parentElement.style.borderColor = "";

    let temErro = false;

    // 2. Verifica se a senha tem pelo menos 8 caracteres (Segurança básica)
    if (senhaInput.value.length < 8) {
        erro.textContent = "A senha deve ter no mínimo 8 caracteres.";
        senhaInput.parentElement.style.borderColor = "#ff4d4d"; // Borda vermelha
        temErro = true;
    }
    // 3. A CONDIÇÃO PRINCIPAL: Verifica se as senhas são diferentes
    else if (senhaInput.value !== confirmarInput.value) {
        erro.textContent = "As senhas não coincidem. Digite novamente.";
        senhaInput.parentElement.style.borderColor = "#ff4d4d"; // Borda vermelha
        confirmarInput.parentElement.style.borderColor = "#ff4d4d"; // Borda vermelha
        temErro = true;
    }

    // 4. Se encontrou algum erro, BLOQUEIA o envio do formulário
    if (temErro) {
        event.preventDefault(); // Esta função é a responsável por não deixar a página recarregar/cadastrar
    }
});

// A função do "olhinho" para mostrar/ocultar a senha (mantida para continuar funcionando)
function toggleSenha(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}