titulo = document.getElementById("titulo");
seletor = document.getElementById("seletor");

function trocarTitulo() {
    titulo.innerHTML = "Meu novo Titulo";
}

function verificarTitulo() {
    console.log(titulo.value);
}

function alinharTexto() {
    titulo.style.textAlign = "center";
}

function verificarValorSelecionado() {
    console.log(seletor.value);
}

function editarTexto(id, mensagem) {
    document.getElementById(id).innerHTML = mensagem;
}

function verificarTexto(id) {
    return document.getElementById(id).value;
}

function verificarSeletor(id) {
    return document.getElementById(id).checked;
}