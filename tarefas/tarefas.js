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
            url: "http://escolarapp2.herokuapp.com/eventos/",
            contentType: 'application/json',
            cache: false,
            method: 'GET',
            dataType: 'json',
            headers: {"Authorization": window.localStorage.getItem('Token')},
            success: function (resposta) {
                //console.log(resposta)
                popularTabela('table',resposta);
            },
            error: function (resposta){
                console.log(resposta)
            }

        });
    }
}
//module.exports = Tarefa
//console.log(window.localStorage.getItem('Token'));

var tarefa = new Tarefa();
tarefa.minhasTarefas;


function popularTabela(id_tabela,respostas) {

    var objetoTabela = document.getElementById(id_tabela);
    var header = objetoTabela.createTHead();
    var headerRow = header.insertRow()

    for (var resp in respostas){
        var atributos = Object.keys(respostas[resp]);
        for (atributo in atributos){
            //console.log(atributos[atributo])
            var headerCol = headerRow.insertCell(atributo)
            headerCol.innerHTML = atributos[atributo]
        }
        var headerColEditar = headerRow.insertCell()

        headerColEditar.innerHTML = "Editar"
        var headerColDeletar = headerRow.insertCell()

        headerColDeletar.innerHTML = "Deletar"

        break;
    }

    for (var resposta in respostas){
        //console.log(respostas[resposta])
        var linha = objetoTabela.insertRow()

        var valores = Object.values(respostas[resposta]);
        var valoresReversos = valores.reverse();

        console.log(valoresReversos)

        for(var valor in valoresReversos){
            var coluna = linha.insertCell(valor)
            coluna.innerHTML = valoresReversos[valor]
        }
        var colunaEditar = linha.insertCell()

        colunaEditar.innerHTML = "<button type=\"button\" class=\"btn btn-outline-light\">Light</button>"
        var colunaDeletar = linha.insertCell()

        colunaDeletar.innerHTML = "<button type=\"button\" class=\"btn btn-outline-light\">Light</button>"



    }


}