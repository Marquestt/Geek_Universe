const fieldset = document.getElementById("fieldset");
const botao = document.getElementById("add");
const entrada = document.getElementById("entrada");
const lista = document.createElement("ul");

fieldset.appendChild(lista);

botao.addEventListener("click", function() {
    const jogo = entrada.value;
    const item = document.createElement("li");
//	const deletar = document.createElement("button");
    //deletar.textContent = "Delete";
	//deletar.style.display = 'none';
    item.textContent = jogo;
	//item.appendChild(deletar);
    lista.appendChild(item);
    entrada.value = '';
	//deletar.addEventListener("click", function(event) {
        //event.stopPropagation();
        //lista.removeChild(item);
    //});
	//item.addEventListener("click", function() {
        //deletar.style.display = deletar.style.display === 'none' ? '' : 'none';
    //});
});
