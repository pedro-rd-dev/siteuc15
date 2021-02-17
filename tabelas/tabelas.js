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

    var tbody = document.createElement("tbody");
    objetoTabela.append(tbody);


    for (var resposta in respostas){
        //console.log(respostas[resposta])
        var linha = tbody.insertRow();


        console.log(respostas[resposta])

        var valores = Object.values(respostas[resposta]).reverse();
        console.log(valores)
        var valoresReversos = valores.reverse();

        console.log(valoresReversos)

        for(var valorid in valoresReversos){
            linha.id =  valoresReversos[valorid]
            break
        }


        for(var valor in valoresReversos){
            var coluna = linha.insertCell(valor)
            coluna.innerHTML = valoresReversos[valor]
        }

        var colunaEditar = linha.insertCell()

        colunaEditar.innerHTML = "<button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#exampleModal\">Editar</button>"

        var colunaDeletar = linha.insertCell()


        id = respostas[resposta].id;

        console.log(id);


        colunaDeletar.innerHTML = "<button type = \"button\" class = \"btn btn-danger\" onClick = \"deletarObjeto("+id+")\">Deletar </button>"






    }
}
