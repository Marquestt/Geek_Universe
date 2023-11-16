const sinopse = document.getElementById("sinopse");
sinopse.addEventListener("click", () =>{
        const texto = document.getElementById("texto");
        const titulo = document.getElementById("titulo");
        texto.innerText = "Terraria é um jogo aonde tudo é possível. Literalmente.";
        titulo.innerText = "Sinópse";
    });

const dados = document.getElementById("dados");
dados.addEventListener("click", () =>{
        const texto = document.getElementById("texto");
        const titulo = document.getElementById("titulo");
        texto.innerText = "Dados miscelaneos do jogo";
        titulo.innerText = "Dados";
    });

const imagens = document.getElementById("imagens");
imagens.addEventListener("click", () =>{
        const texto = document.getElementById("texto");
        const titulo = document.getElementById("titulo");
        texto.innerHTML = '<img src="imagens/terraria-1.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/terraria-2.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/terraria-3.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/terraria-4.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/terraria-5.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/terraria-6.png" class = "jogo" alt="foto de gameplay do jogo">';
        titulo.innerText = "Imagens do Jogo";
    });




