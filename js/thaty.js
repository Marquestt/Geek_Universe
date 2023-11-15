const sinopse = document.getElementById("sinopse");
sinopse.addEventListener("click", () =>{
        const texto = document.getElementById("texto");
        const titulo = document.getElementById("titulo");
        texto.innerText = " Um jogo onde voce cuida da sua vida, mas a de mentirinha, porque a de verdade voce está deixando pra lá pra jogar isso aqui";
        titulo.innerText = "Sinópse";
    });

const dados = document.getElementById("dados");
dados.addEventListener("click", () =>{
        const texto = document.getElementById("texto");
        const titulo = document.getElementById("titulo");
        texto.innerText = "Dados miscelaneos do jogo";
        titulo.innerText = "Dados";
    });
