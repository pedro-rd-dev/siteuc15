class Tarefa {
    constructor(realizada, descricao) {
        this._descricao = descricao;
        this._realizada = realizada;
    }

    get realizada() {
        return this._realizada;
    }

    set realizada(value) {
        this._realizada = value;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(value) {
        this._descricao = value;
    }

    get minhasTarefas() {
        $.ajax({
            url: "http://escolarapp2.herokuapp.com/tarefas/",
            contentType: 'application/json',
            cache: false,
            method: 'GET',
            dataType: 'json',
            headers: {"Authorization": window.localStorage.getItem('Token')},
            success: function (resposta) {
                console.log(resposta)
                popularTabela(resposta);
            },
            error: function (resposta){
                console.log(resposta)
            }

        });
    }
}
//module.exports = Tarefa
console.log(window.localStorage.getItem('Token'));

var tarefa = new Tarefa();
tarefa.minhasTarefas;


function popularTabela(respostas) {
    var objetoTabela = document.getElementById("table");

    var header = objetoTabela.createTHead();
    var headerRow = header.insertRow(0)
    var headerCol1 = headerRow.insertCell(0)
    var headerCol2 = headerRow.insertCell(1)
    headerCol1.innerHTML  = "coluna 1"
    headerCol2.innerHTML  = "coluna 2"


    for (var resposta in respostas){
        console.log(respostas[resposta])
        var linha = objetoTabela.insertRow(resposta +1)
        var coluna = linha.insertCell(0)
        var coluna2 = linha.insertCell(1)

        coluna.innerHTML = respostas[resposta].descricao;
        coluna2.innerHTML = respostas[resposta].realizada;
    }

}


