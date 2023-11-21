const sinopse = document.getElementById("sinopse");
sinopse.addEventListener("click", () =>{
        const texto = document.getElementById("texto");
        const titulo = document.getElementById("titulo");
        texto.innerText = " Um jogo onde voce cuida da sua vida, mas a de mentirinha, porque a de verdade voce está deixando pra lá pra jogar isso aqui";
        titulo.innerHTML = '<h3>Jogabilidade</h3>';
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
        texto.innerHTML = '<img src="imagens/ts4-1.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/ts4-2.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/ts4-3.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/ts4-4.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/ts4-5.png" class = "jogo" alt="foto de gameplay do jogo"><img src="imagens/ts4-6.png" class = "jogo" alt="foto de gameplay do jogo">';
        titulo.innerText = "Imagens do Jogo";
    });
