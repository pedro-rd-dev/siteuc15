function verificarConteudo() {
    var objetoConteudo = document.getElementById("conteudo");

    console.log(objetoConteudo)
    console.log(objetoConteudo.textContent)
}

function alterarConteudo() {
    var objetoConteudo = document.getElementById("conteudo");
    objetoConteudo.innerHTML = "MEU NOVO CONTEÚDO"
}