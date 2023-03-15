// function teste1 (N1, N2) {
//     console.log (N1 + N2)
// }
// teste1 (1,2)


// function teste2 (num1, num2) {
//  let t = num1 / num2
//   return t
// }

// console.log (teste2(50,2))

// // porque usar com return? n entendi direito :(

// function Teste3 () { //info da function
//     console.log ("olha eu aqui!")
// }

// Teste3 () //executando a function

// function Comida (comida1,comida2,comida3) //slots
//  {

//     return `Meu prato de comida é: ${comida1},${comida2},${comida3} `
// }

// const prato = Comida ('arroz', 'feijão', 'carne') //Valores dos slots ( o que tem no slot)
// console.log (prato)

// //arrow function

// const flecha = (numero1, numero2, numero3) => {
//     let total = numero1 + numero2 * numero3
//     return total;
// }
// const resultado = flecha (1,2,3)
// console.log (resultado)


// //função anonima

(function () {console.log ('Oi tudo bem?')})  ()  // auto executa

setTimeout(function(){
    console.log( ' vou aparecer em 10 sec ' )
},10000)

// por algum motivo a função anonima e de tempo da problema se tiver outras functions

let assunto = 'conversar'

function criarAssunto () {
    assunto = "dançar"
    return assunto
}
console.log (assunto)
console.log (criarAssunto (assunto));



//return

Minhaidade ()
function Minhaidade () { 
    return console.log (17)
}


//callback

function Callback (Callback) { console.log (`Inicio da função`) 

Callback (1,2) 

console.log (`Fim da função`)
}

Callback ((num1, num2) => {return console.log (num1 + num2)})


//function construct -> serve para ser reutilizada varias vezes. Ajuda a deixar o código mais clean
//Nota: Funções construtoras SEMPRE começam com a letra maiuscula, para que o console identifique
function Sum () {
    this.num1
    this.num2
    this.calc = function (num1,num2) {return total = num1 + num2}
}

const math1 = new Sum ().calc (10,10)
console.log (math1)

const math2 = new Sum ()
const num1 = math2.num1 = 20
const num2 = math2.num2 = 20

console.log (math2.calc(num1,num2))

//ainda to confusa com isso mas vamo que vamo