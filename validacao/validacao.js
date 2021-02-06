//ou é .value ou é .textContent
var objetoTitulo = document.getElementById("titulo");

function capturarValorDoH1() {
    console.log(objetoTitulo.textContent);
}

function modificarValorDoH1() {
    objetoTitulo.innerHTML = "MEU NOVO TITULO";
}

function pintarDeVermelho() {
    objetoTitulo.style.color = "red";
}

function centralizar() {
    objetoTitulo.style.textAlign = "center";
}