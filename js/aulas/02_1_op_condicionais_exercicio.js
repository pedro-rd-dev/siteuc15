//UMA EMPRESA DE TRANSPORTE DE PESSOAS POR APLICATIVO DESEJA CRIAR UM CADASTRO DE MOTORISTA.
//NESTE CADASTRO, O MOTORISTA PRECISA ENVIAR ALGUNS DOCUMENTOS/INFORMAÇOES,TAIS COMO: NOME, ATESTADO ANTECEDENTES, IDADE, NACIONALIDADE
//ATRAVES DO JAVASCRIPT, CRIE UM CÓDIGO QUE RETORNE AO USUARIO SE ELE PODE OU NÃO SE CADASTRAR, SABENDO QUE O MOTORISTA :
//1-NÃO PODE TER ATESTADO DE ANTECEDENTES(SEM FIXA CRIMINAL)
//2-PRECISA SER MAIOR QUE 18 ANOS
//3-PRECISA SER BRASILEIRO OU AGENTINO

//OBS O CÓDIGO DEVE MOSTRAR AO USUÁRIO O MOTIVO PELO QUAL NÃO PODE SER CADASTRADO

console.clear();
var candidato = { nome: "Antonio", atestadoDeAntecedendes: true, idade: 54, nacionalidade: "Brasileiro" };
console.log("Nome do candidato: " + candidato.nome);
console.log("Status do atestado de antecedentes criminais, sendo válido igual a true e inválido igual a false: " + candidato.atestadoDeAntecedendes);
console.log("Idade do candidadto: " + candidato.idade);
console.log("Nacionalidade do candidato: " + candidato.nacionalidade);
console.log("");

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