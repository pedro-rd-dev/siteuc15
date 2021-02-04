const MyArray = require('./Array.js');

var valor1 = 60
var valor2 = 20
var valor3 = 30

var valores = [valor1.valueOf(),valor2.valueOf(),valor3.valueOf()]

var meuArray  = new MyArray(valores);

var valoresOrdenados = meuArray.itens.length;

console.log(valoresOrdenados)
