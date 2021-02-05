
function cadastrar(){
    var campoNome = document.getElementById('nome');
    var campoIdade = document.getElementById('idade');
    var campoNaturalidade = document.getElementById('naturalidade');
    var campoAntecedentesCriminais = document.getElementById('antecedentesCriminais').checked;

    var validacao = false;
    validacao = validarIdade(campoIdade);
    validacao = validarNaturalidade(campoNaturalidade);
    validacao = validarAntecedentes(campoAntecedentesCriminais);

    if (validacao){
        console.log("O cadastro pode continuar")
    }
}

function validarIdade(idade){
    if(idade.value >=18){
        document.getElementById('validacaoIdade').innerHTML="";
        return true
    }
    document.getElementById('validacaoIdade').innerHTML="Idade inferior a 18 anos";
    return false;
}

function validarNaturalidade(naturalidade){
    if(naturalidade.value === "brasileiro" || naturalidade.value === "argentino"){
        document.getElementById('validacaoNaturalidade').innerHTML="";
        return true
    }
    document.getElementById('validacaoNaturalidade').innerHTML="Não é brasileiro ou argentino";
    return false;
}

function validarAntecedentes(antecedentes){
    if(antecedentes){
        document.getElementById('validacaoAntecedentes').innerHTML="Possui atestado antecedentes";
        return false;
    }
    document.getElementById('validacaoAntecedentes').innerHTML="";
    return true;
}
