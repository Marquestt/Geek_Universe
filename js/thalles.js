const sinopse = document.getElementById("sinopse");
sinopse.addEventListener("click", () =>{
        const texto = document.getElementById("texto");
        const titulo = document.getElementById("titulo");
        texto.innerText = "Grande clássico rpg do SNES, e se a linha Final Fantasy se tornou o que é hoje, essa grandiosidade teve sua explosão nesse jogo.";
        titulo.innerText = "Sinópse";
    });

const dados = document.getElementById("dados");
dados.addEventListener("click", () =>{
        const texto = document.getElementById("texto");
        const titulo = document.getElementById("titulo");
        texto.innerText = "Dados miscelaneos do jogo";
        titulo.innerText = "Dados";
    });
