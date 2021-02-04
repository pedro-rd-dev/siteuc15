class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area(){
        return this.altura * this.largura + "m²"
    }
};


module.exports = Retangulo
