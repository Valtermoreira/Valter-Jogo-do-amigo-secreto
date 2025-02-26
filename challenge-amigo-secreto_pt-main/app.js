let amigos = [];
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    if (nome != "" && nome.match()) {
        // adiciona ao array
        amigos.push(nome);
        let lista = document.getElementById("listaAmigos");
        let item = document.createElement("li");
        // adiciona a lista
        item.textContent = nome;
        lista.appendChild(item);
        // limpar o input 
        input.value = "";
    } else {
        alert("Por favor, digite um nome válido!");
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há nomes para adicionar");
        return;
    }
    let i = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[i];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let itemResultado = document.createElement("li");
    itemResultado.textContent = `O amigo sorteado é ${nomeSorteado}`;
    resultado.appendChild(itemResultado);
}
function reiniciarJogo() {
    amigos = [];
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
}
// implementando a tecla enter 
document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        adicionarAmigo();
    }
});