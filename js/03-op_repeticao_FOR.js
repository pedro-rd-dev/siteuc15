var solicitacao1 = {animal: 'cachorro', nome:'paula',valor: 40}
var solicitacao2 = {animal: 'gato', nome:'fernanda',valor: 80}
var solicitacao3 = {animal: 'cachorro', nome:'paula',valor: 120}

var solicitacoes = [];

solicitacoes.push(solicitacao1)
solicitacoes.push(solicitacao2)
solicitacoes.push(solicitacao3)

console.log(solicitacoes)

for (var solicitacao in solicitacoes){

    console.log(solicitacoes[solicitacao].nome)
}
