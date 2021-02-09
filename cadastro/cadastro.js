function cadastrar() {
    var campoNome = verificarTexto("nome");
    var campoIdade = verificarTexto('idade');
    var campoNaturalidade = verificarTexto('naturalidade');
    var campoAntecedentesCriminais = verificarSeletor('antecedentesCriminais');

    console.log(campoNome);
    console.log(campoIdade);
    console.log(campoNaturalidade);
    console.log(campoAntecedentesCriminais);

    if(validarIdade(campoIdade)){
        if(validarNaturalidade(campoNaturalidade)){
            if(validarAntecedentes(campoAntecedentesCriminais)){
                console.log("O cadastro pode continuar")
            }
        }
    }
}

function validarIdade(idade) {
    if (idade >= 18) {
        editarTexto('validacaoIdade', "")
        return true
    }
    editarTexto('validacaoIdade', idade + " É inferior a 18 anos: ")
    return false;
}

function validarNaturalidade(naturalidade) {
    if (naturalidade === "brasileiro" || naturalidade === "argentino") {
        editarTexto('validacaoNaturalidade', "")
        return true
    }
    editarTexto('validacaoNaturalidade', "Não é brasileiro ou argentino")
    return false;
}

function validarAntecedentes(antecedentes) {
    if (antecedentes) {
        editarTexto('validacaoAntecedentes', "Possui atestado antecedentes")
        return false;
    }
    editarTexto('validacaoAntecedentes', "")
    return true;
}
