{
    const nome = "bianca"
    console.log (nome)
}
{
    const nome = "henzo"
    console.log (nome)
}
/* let dentro de um escopo pode usar a mesma declaração.
o bom de usar let/const é que se eu tiver fazendo um código gigante e por acaso declarar uma variavel com o mesmo nome,n vai bugar (claro que tem que ta dentro de um escopo, no caso: { let/const x = algo}) */
//let e var são mutaveis, já const é constante, no caso, n muda.

var n = 1
var n = 2
console.log (n)
//Var deixa eu Redeclarar a mesma variavel e o valor
let m = 1
m = 3
console.log (m)
//let não permite redeclarar a variavel mas permite redeclarar o valor. Isso serve pro código não ficar um caos. Imagina usar varios Var com o mesmo nome e dps usar, ia da problema
const b = 20
//b = 2
console.log (b)
//const n deixa redeclarar a variavel e muito menos o valor por ser constante

const name1 = `bianca`
const name2 = `matias`
let BoasVindas = `Olá ${name1} ${name2}`
console.log (BoasVindas)

const Salgado = 10;
const taxa = 1.20;
let ValorTotal = Salgado*taxa;
console.log (ValorTotal)
//eu posso criar toda uma frase na variavel e dps só mandar o console executar essa variavel.
