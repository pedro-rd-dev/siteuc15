var url = "";
var idRow = "";

function getListaObjetos(urlRecebida,id_table){
    url = urlRecebida;
    $.ajax({
        url: url,
        contentType: 'application/json',
        cache: false,
        method: 'GET',
        dataType: 'json',
        headers: {"Authorization": window.localStorage.getItem('Token')},
        success: function (resposta) {
            //console.log(resposta)
            popularTabela(id_table,resposta);
        },
        error: function (resposta){
            console.log(resposta)
        }

    });
}
function deletarObjeto(id){
    idRow= id;
    $.ajax({
        url: url + idRow,
        contentType: 'application/json',
        cache: false,
        method: 'DELETE',
        dataType: 'json',
        headers: {"Authorization": window.localStorage.getItem('Token')},
        success: function (resposta) {
            //console.log(resposta)

            var row = document.getElementById(idRow);
            row.parentNode.removeChild(row);

        },
        error: function (resposta){
            console.log(resposta)
        }

    });

}
function editarObjeto(){

}

