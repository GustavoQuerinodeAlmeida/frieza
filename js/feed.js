function publicarPost(){

    const texto = document.getElementById("novoPost").value;

    if(texto.trim() === ""){
        alert("Digite algo primeiro");
        return;
    }

    const feed = document.getElementById("feed");

    const post = document.createElement("div");
    post.classList.add("tweet-card");

    post.innerHTML = `
      <div class="tweet-header">
        <img src="../assets/img/perfil.jpg" class="avatar">

        <div class="tweet-user">
          <span class="name">Seu Nome</span>
          <span class="username">@usuario</span>
        </div>
      </div>

      <p class="tweet-text">${texto}</p>

      <div class="tweet-actions">
        <button>💬 Comentar</button>
        <button>❤️ Curtir</button>
        <button>🔗 Compartilhar</button>
      </div>
    `;

    feed.prepend(post);

    document.getElementById("novoPost").value = "";
}