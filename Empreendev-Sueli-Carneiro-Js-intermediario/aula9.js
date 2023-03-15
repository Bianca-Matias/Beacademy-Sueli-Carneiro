//Rest / spread
function FazendoSoma (...itens) {
    let total = 0
    for (const item of itens) { total = total + item}
    return total 
}
console.log (FazendoSoma(1,2,2,5))



//integrando arrays/ spread operator

const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9,10]

const OsDoisArrays = [...array1, ...array2]

console.log (OsDoisArrays)




//destruturing

const carro = {
    marca:'Fiat',
    cor:'azul',
    portas: 4,
}
const {marca,cor} = carro

console.log (`${marca}, ${cor}`)

//Outro exemplo

const cliente = {
    nome: 'Bianca',
    compras: {
    digitais: {
        jogos: ['project Zomboid','Bioshock Infinite','Minecraft'],
        filmes: ['Interstellar','gato de botas 2']
    },
    fisicas: ['caneta','borracha']}
}

const {digitais,fisicas} = cliente.compras
console.log (`${digitais.jogos},${digitais.filmes},${fisicas}`)

const Frutas = ['banana','maça','melancia','ameixa']

const prFruta = [0];
const seFruta = [1];
const teFruta = [2];
const quFruta = [3]

    const [p,s,t,q] = Frutas

    console.log (t)



    //Recursion

function ContarAte0 (number) {
    console.log (number);
    const numero = number - 1

    if (numero > 0) {ContarAte0(numero)}
}
ContarAte0 (20)

//default parameters


 function diga (mensagem = 'oi') {
    console.log (mensagem)
 }

 diga ()

 //caso não tenha nenhum parametro ao chamar a função, ele dirá oi, sendo um parametro default
