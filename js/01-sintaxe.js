//ATRIBUINDO VALOR À VARIAVEL
//TIPO NOME = VALOR

let primeiroNumero = 2;
let segundoNumero = 4;
let resultado;

resultado = primeiroNumero + segundoNumero;
console.log("SOMA: " + resultado)

resultado = primeiroNumero - segundoNumero;
console.log("SUBTRACAO: " + resultado)

resultado = primeiroNumero / segundoNumero;
console.log("DIVISAO: " + resultado)

resultado = primeiroNumero * segundoNumero;
console.log("MULTIPLICACAO: " + resultado)

let media = (primeiroNumero + segundoNumero )/2;
console.log("Média: " + media)

let idade = 33;
let nome = "pedro";
console.log("A idade de " + nome + " é " + idade + " anos");


//ALTERANDO VALOR DE VARIÁVEL
let Idade_Pai = idade + 15;
console.log("Idade pai: " + Idade_Pai);


//ARRAYS
let listaDeNomes = ["ORNINTORRINCO", 45, "murilo"];
console.log(listaDeNomes);

listaDeNomes[1] = 100;
console.log(listaDeNomes);


let computador = { cor: "preto", modelo: "lenovo", processador: "intel" };
console.log(computador);
console.log(computador.cor);
console.log(computador.modelo);
console.log(computador.processador);


//LISTAS
let listaIdades = { idadePai: 45, idadeFilho: 20, idadeMae: 44 };
console.log(listaIdades);
listaIdades.idadeFilho = 100;
console.log("Idade pai: " + listaIdades.idadePai);
console.log("Idade filho: " + listaIdades.idadeFilho);
console.log("Idade mae: " + listaIdades.idadeMae);
