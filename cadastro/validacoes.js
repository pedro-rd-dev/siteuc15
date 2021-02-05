function cadastrar() {
    var campoNome = verificarTexto("nome");
    var campoIdade = verificarTexto('idade');
    var campoNaturalidade = verificarTexto('naturalidade');
    var campoAntecedentesCriminais = verificarSeletor('antecedentesCriminais');

    var validacao = false;
    validacao = validarIdade(campoIdade);
    validacao = validarNaturalidade(campoNaturalidade);
    validacao = validarAntecedentes(campoAntecedentesCriminais);

    if (validacao) {
        console.log("O cadastro pode continuar")
    }
}

function validarIdade(idade) {
    if (idade.textContent >= 18) {
        editarTexto('validacaoIdade', "")
        return true
    }
    editarTexto('validacaoIdade', "Idade inferior a 18 anos")
    return false;
}

function validarNaturalidade(naturalidade) {
    if (naturalidade.textContent === "brasileiro" || naturalidade.textContent === "argentino") {
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
