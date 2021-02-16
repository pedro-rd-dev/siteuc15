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

