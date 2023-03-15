function Pessoa (nome,idade) {
    this.nome = nome
    this.idade = idade
}

const bianca = new Pessoa ('Bianca',17)
console.log (bianca)

// o variavel bianca recebe a herança de pessoa, por usar new Pessoa

const Computador = {
 e: function (valor, cor, ano, marca)
  { return `O valor do produto é ${valor}, sua marca é ${marca}, a cor dele é ${cor} e seu ano de criação é ${ano}}`}
}


const samsung = {}
Object.setPrototypeOf (samsung, Computador)
console.log (samsung.e(2000, 'preta', 2019, 'samsung'))
//da para fazer assim


function pc(valor, cor, ano, marca) {
    this.valor = valor
    this.cor = cor
    this.ano = ano
    this.marca = marca
}
const dell = new pc (5000, 'azul', 2020, 'dell')
console.log (`especificações do computador:`,dell)
//e da pra fazer assim