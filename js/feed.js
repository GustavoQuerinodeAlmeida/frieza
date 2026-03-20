// Função para criar o post
function publicarPost() {
    // 1. VERIFICAÇÃO DE SEGURANÇA: Checa se o usuário está logado
    const estaLogado = localStorage.getItem("usuarioLogado");
    
    if (estaLogado !== "true") {
        alert("Ops! Você precisa fazer login para fazer uma publicação.");
        window.location.href = "login.html"; // Redireciona o engraçadinho pro login
        return; // Para a execução do código aqui
    }

    // 2. LÓGICA DE PUBLICAÇÃO NORMAL
    const texto = document.getElementById("novoPost").value;

    if(texto.trim() === ""){
        alert("Escreva algo antes de publicar!");
        return;
    }

    const feed = document.getElementById("feed");
    const post = document.createElement("div");
    post.classList.add("tweet-card");

    // Pega o nome do usuário salvo no login (se não achar, usa um padrão)
    const nomeUsuario = localStorage.getItem("nomeUsuario") || "Estudante ENIAC";
    const arrobaUsuario = localStorage.getItem("arrobaUsuario") || "@aluno";

    post.innerHTML = `
      <div class="tweet-header">
        <img src="../assets/img/perfil.jpg" class="avatar">
        <div class="tweet-user">
          <span class="name">${nomeUsuario}</span>
          <span class="username">${arrobaUsuario}</span>
        </div>
      </div>
      <p class="tweet-text">${texto}</p>
      <div class="tweet-actions">
        <button><i class="fa-regular fa-comment"></i> Comentar</button>
        <button><i class="fa-regular fa-heart"></i> Curtir</button>
        <button><i class="fa-solid fa-share-nodes"></i> Partilhar</button>
      </div>
    `;

    feed.prepend(post); // Adiciona o post no topo do feed
    document.getElementById("novoPost").value = ""; // Limpa a caixa de texto
}