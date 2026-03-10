const form = document.getElementById("formCadastro");
const botao = form.querySelector("button[type='submit']");
const senhaInput = document.getElementById("senha");
const confirmarInput = document.getElementById("confirmarSenha");
const erro = document.getElementById("erroSenha");

botao.addEventListener("click", function (event) {
    erro.textContent = "";

    senhaInput.classList.remove("erro-input");
    confirmarInput.classList.remove("erro-input");

    if (senhaInput.value.length < 8) {
        erro.textContent = "A senha deve ter no mínimo 8 caracteres.";
        senhaInput.classList.add("erro-input");
        event.preventDefault();
        return;
    }

    if (senhaInput.value !== confirmarInput.value) {
        erro.textContent = "As senhas não coincidem.";
        senhaInput.classList.add("erro-input");
        confirmarInput.classList.add("erro-input");
        event.preventDefault();
    }
});
