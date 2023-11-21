const sinopse = document.getElementById("sinopse");
sinopse.addEventListener("click", () =>{
        const texto = document.getElementById("texto");
        const titulo = document.getElementById("titulo");
        texto.innerHTML = '<p>Terraria é um jogo composto por setas e um pouco semelhante a títulos clássicos de exploração e aventura como Metroid e The Legend of Zelda.</p><h3>Elementos básicos do jogo</h3><p>Incluem ciclos de dia e noite, coleta de materiais para confecção de novos objetos, progresso baseado na aquisição de novos itens e exploração de novas áreas, interação com outros personagens, pontos de vida e pontos de magia.</p><p>Antes de começar, o jogador possui a possibilidade de personalizar seu personagem, nível de dificuldade, atalhos do teclado, a cor do cursor, dentre diversas outras opções.</p><p>No início, o jogador receberá diversas ferramentas básicas necessárias para o combate e aquisição de recursos. O personagem do jogador também conta com medidores de vida e magia que podem ser expandidos ao decorrer do jogo. Um NPC guia estará sempre presente nos primeiros momentos, oferecendo dicas sobre como progredir e opção de verificar materiais necessários para se produzir novos itens.</p><p>Ao se construir casas habitáveis e cumprir certos objetivos, novos personagens surgirão e ocuparão as residências, oferecendo serviços como mercadores ou curandeiros. Atualmente, é possível se encontrar 22 personagens diferentes, além de 3 NPCs viajantes que não precisam de uma residência. Dentre os possíveis NPCs estão: Merchant, Dryad, Demolitionist, Arms Dealer, Nurse, Clothier, Mechanic, Goblin Tinkerer, Wizard, Steampunker, Dye Trader, Party Girl, Cyborg, Painter, Witch Doctor, Truffle, Pirate, Angler, Stylist, Traveling Merchant e Zoologist. Dentre os serviços oferecidos estão cura, venda de itens e distribuição de missões onde o jogador poderá utilizar suas moedas, obtidas por derrotar monstros, destruir vasos, ou em baús e tesouros escondidos pelo mapa.</p><p>Uma das características principais de Terraria é a existência de múltiplos biomas repletos de ruínas e tesouros, habitados por diversos tipos de criaturas. Alguns biomas comuns incluem florestas, selvas, desertos, tundras, praias e cavernas. Três biomas nocivos podem crescer e consumir outros biomas existentes, sendo esses Hallow, Crimson, Corruption e o Cemitério. Alguns biomas são apenas acessíveis após certos itens serem adquiridos ou tarefas forem cumpridas, como masmorras, templos, ilhas flutuantes e um sub-mundo. É possível também se encontrar mini-biomas dentro de cada área, como cavernas com cogumelos gigantes, casas abandonadas, salas com tesouros e grutas de pedras preciosas.</p><p>O jogo também possui chefes e eventos especiais, onde o jogador precisa defender a si mesmo ou aos seus companheiros. Alguns eventos comuns incluem lua de sangue, eclipse solar, chuva de slimes, invasão de goblins, invasão alienígena e eventos de Halloween e Natal. Atualmente o jogo conta com mais de 20 chefes diferentes, dentre chefes comuns, chefes específicos de eventos e chefes exclusivos de certas versões do jogo. A presença de influências de H. P. Lovecraft é frequente em Terraria, especialmente observada em chefes como Eye of Cthulhu e Brain of Cthulhu.</p><p>Atualmente, Terraria conta com mais de 3,000 itens diferentes, incluindo armas, ferramentas, armaduras, munições, magias, poções mágicas, montarias, pets e materiais de construção.</p>';
        titulo.innerText = "Sobre";
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




