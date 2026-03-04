const form = document.getElementById("formLogin");
const botao = form.querySelector("button[type='submit']");
const erro = document.getElementById("erroLogin");

botao.addEventListener("click", function (event) {
    erro.textContent = "";

    const campos = form.querySelectorAll("input");
    campos.forEach(campo => campo.classList.remove("erro-input"));

    if (!form.checkValidity()) {
        campos.forEach(campo => {
            if (!campo.checkValidity()) {
                campo.classList.add("erro-input");
            }
        });
        event.preventDefault();
        return;
    }
});
