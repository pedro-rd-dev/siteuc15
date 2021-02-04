class MyArray {
    constructor(itens) {
        this.itens = itens;
    }

    get ordenarPorNomes(){
        return this.itens.sort();
    }

    get ordenarPorNumeroCrescente(){
        return this.itens.sort(function(a, b){return a-b});
    }
    get ordenarPorNumeroDecrescebte(){
        return this.itens.sort(function(a, b){return b-a});
    }
    get buscarMaiorValor(){
        return this.itens.sort(function(a, b){return b-a})[0];
    }

    get buscarMenorValor(){
        return this.itens.sort(function(a, b){return a-b})[0];
    }
};


module.exports = MyArray
