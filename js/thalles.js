const sinopse = document.getElementById("sinopse");
sinopse.addEventListener("click", () =>{
        const texto = document.getElementById("texto");
        const titulo = document.getElementById("titulo");
        texto.innerText = "Grande clássico rpg do SNES, e se a linha Final Fantasy se tornou o que é hoje, essa grandiosidade teve sua explosão nesse jogo.";
        titulo.innerText = "Sinopse";
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
        texto.innerHTML = '<img src="imagens/ff6-1.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/ff6-2.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/ff6-3.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/ff6-4.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/ff6-5.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/ff6-6.png" class = "jogo" alt="foto de gameplay do jogo">';
        titulo.innerText = "Imagens do Jogo";
    });
