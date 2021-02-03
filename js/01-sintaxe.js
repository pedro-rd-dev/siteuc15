//ATRIBUINDO VALOR À VARIAVEL
//TIPO NOME = VALOR
var idade = 24;

console.log("idade: " + idade)

//ALTERANDO VALOR DE VARIÁVEL
var Idade_Pai = idade + 15;

console.log("Idade pai: " + Idade_Pai)

//ARRAYS
var idades = [25, 3, 4, 5];

console.log("Idades: "+idades)

console.log("Primeira idade da lista: " + idades[0])

//LISTAS
var listaIdades = {idadePai: 45, idadeFilho:20, idadeMae:44}

console.log(listaIdades)

listaIdades.idadeFilho = 100

console.log("Idade pai: " + listaIdades.idadePai)
console.log("Idade filho: " + listaIdades.idadeFilho)
console.log("Idade mae: " + listaIdades.idadeMae)
