//OPERADORES DE INCREMENTO


//operador lógico

let numeroAdd = 10
numeroAdd++
console.log (numeroAdd) //vai dar 11 por causa do ++ (devemos por ++ por causa que o primeiro mais simboliza que vai ser algo, e o proximo significa 1)

let numeroMenos = 20
numeroMenos--
console.log (numeroMenos)

//operadores aritméticos
//+ - / * %

let nota1 = 10 
let nota2 = 3
let nota3 = 9
let nota4 = 5
let nota5 = 6
let notaGeral = (nota1 + nota2 + nota3 + nota4 +nota5)/5
console.log (notaGeral)
console.log (Math.round(notaGeral))
console.log (Number(Math.floor(notaGeral)))
console.log (notaGeral.toFixed(0)) // se tofixed for colocado 0 ele vai arredondar para o numero acima ou abaixo = 5.4 nesse método é 5, se fosse 5.5 acima seria 6

//operadores relacionais ou iguais
// = <= >= == === != !== < >

//!= significa que é diferente da informação
// !== significa que é diferente em informação E em tipo (string, boolean, number,etc) Nota: se 1 dos resultados der verdade irá dar verdadeiro. Informação OU tipo é diferente? *OU*
// == a informação é igual a outra informação
// === a informação é igual tanto em informação quando em tipo. Nota: Aqui a info e o tipo tem que ser verdadeiros, caso contrario dará falso.  Informação E tipo é igual? *E*
let n1 = 1
let n2 = 2

let relacao = n1 <= n2 // numero 1 é menor que numero 2?
console.log (relacao)

//Operador de atribuição

//Nota: por o = após o +,-,/,%,* é importante para adicionar ao let, caso não coloque a informação não vai. Ex: se eu tirar o = do -=2 o numero vai dar 12 ao invez de 10.
let numero1 = 10
numero1 +=20
numero1 /=10
numero1 *=4
numero1 -=2

console.log(numero1)

let numero2 = 25
numero2 %=5 //Isso é raiz?

console.log (numero2)

//operadores condicionais (terminais)
// Condicao ? true : false 
let numeroCondicional1 = 10
let numeroCondicional2 = 20

const Condicao = numeroCondicional1 > numeroCondicional2 ? "Isso é verdade" : "isso é falso"
// o boolean aqui funciona com primeiro sendo true e dps sendo false. Dps significa que pode ter 1 ou mais true e dps o false, bem na ideia de: se isso for verdade, caso não seja verdade tente isso, se nenhum dos dois casos for verdade irá ser falso
console.log (Condicao)

let valor1 = 10
let valor2 = 20

const c = valor1 >= valor2 ? "verdade na 1° alternativa" : valor1 >= valor2 ? "verdade na 2° alternativa" : "falso"
// O que acontece aqui é: Se valor1 for maios que valor2 é pra dizer "verdade", se valor1 não for maior que valor2, prosseguir. Se valor1 for menor que valor2 então dizer "verdade2", caso nenhuma das alternativas anteriores serem verdades dizer: "falso"
console.log (c)
//nota: ? indica que é condição. 
//nota2: aqui tambem usar após >,<,etc devemos usar = após Ex: <=, >=, se não o console não entende.