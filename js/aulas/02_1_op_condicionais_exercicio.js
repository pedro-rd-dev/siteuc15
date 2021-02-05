//UMA EMPRESA DE TRANSPORTE DE PESSOAS POR APLICATIVO DESEJA CRIAR UM CADASTRO DE MOTORISTA.
//NESTE CADASTRO, O MOTORISTA PRECISA ENVIAR ALGUNS DOCUMENTOS/INFORMAÇOES,TAIS COMO: NOME, ATESTADO ANTECEDENTES, IDADE, NACIONALIDADE
//ATRAVES DO JAVASCRIPT, CRIE UM CÓDIGO QUE RETORNE AO USUARIO SE ELE PODE OU NÃO SE CADASTRAR, SABENDO QUE O MOTORISTA :
//1-NÃO PODE TER ATESTADO DE ANTECEDENTES(SEM FIXA CRIMINAL)
//2-PRECISA SER MAIOR QUE 18 ANOS
//3-PRECISA SER BRASILEIRO OU AGENTINO

//OBS O CÓDIGO DEVE MOSTRAR AO USUÁRIO O MOTIVO PELO QUAL NÃO PODE SER CADASTRADO


console.clear();

function verificarAntecedentes(objeto) {
    if (objeto.atestadoDeAntecedendes) {
        console.log("A pessoa possui atestado de antecedentes");
        return true;
    }
    console.log("A pessoa não possui atestado de antecedentes");
    return false;
}

function verificarMaioridade(pessoa) {
    if (pessoa.idade > 18) {
        console.log("A pessoa possui mais de 18 anos");
        return true;
    }
    console.log("A pessoa não possui mais de 18 anos");
    return false;
}

function verificarNacionalidade(pessoa) {
    if (pessoa.nacionalidade === "Brasileiro" || "Argentino") {
        console.log("A pessoa é brasileira ou argentina");
        return true;
    }
    console.log("A pessoa não é brasileira ou argentina");
    return false;
}




var candidato = { nome: "Antonio", atestadoDeAntecedendes: true, idade: 17, nacionalidade: "Brasileiro" };


if (verificarAntecedentes(candidato)) {
    if (verificarMaioridade(candidato)) {
        if (verificarNacionalidade(candidato)) {
            console.log("CANDIDATO APROVADO")
        }
    }

}






/*


if (candidato.atestadoDeAntecedendes == true) {
    if (candidato.idade >= 18) {
        if (candidato.nacionalidade == "Brasileiro" || candidato.nacionalidade == "Argentino")
            console.log("Esse candidato foi aprovado com sucesso");
    }
}


if (candidato.atestadoDeAntecedendes != true) {
    console.log("Candidato rejeitado devido a problemas com atestado de antecedentes criminais.");
}
if (candidato.idade < 18) {
    console.log("Candidato rejeitado por ser menor de idade.");
}
if (candidato.nacionalidade != "Brasileiro" && candidato.nacionalidade != "Argentino") {
    console.log("Candidato rejeitado por questões de nacionalidade incompatível: " + candidato.nacionalidade + ".");
}

*/