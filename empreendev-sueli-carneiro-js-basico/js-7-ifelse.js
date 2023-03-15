

let n = 5
if (n > 10) { console.log ("numero maior que 10, no caso", n)}
else { console.log ("numero menor que 10, no caso", n)}

/*
algumas coisas que usam < > == === != !==        && significa e      || significa ou
*/

let numero = 2
if (numero > 24 ) { console.log ("esse numero é maior que 24")}
else if (numero == 24) { console.log ("numero igual a 24")}
else { console.log ("numero menor que 24")}
//o if else ta dando problema, era pra ele dizer numero enor que 24 mas ta dizendo numero igual a 24
//resolvido com ajuda do gui. No else if, tenho que por dois = para funcionar, no caso else if (numero == 24) se não da problema

let numer = 2
if (numer > 24 ) { console.log ("esse numero é maior que 24")}
else { console.log ("numero menor que 24")}

let letra = "c"

switch (letra) {
    case 'a': console.log ("apertou a")
    break
    case 'b': console.log ("apertou b")
    break
    default: console.log ("outra tecla")
}

let isAdmin = true
if (!isAdmin) {console.log ("falso")}
else {console.log ("verdade")}
//ao colocar ! antes de isAdmin ele é invertido e fica false. como se fosse o (-1) na metematica

function calculo (n1,opr,n2) {
let result

 switch (opr) {
    case '+': result = n1+n2 
    break
    case '-': result = n1-n2 
    break
    case '*': result = n1*n2
    break
        default: console.log ("error") 
}
return result}

console.log (calculo(10,'*',20))









function Idade (minhaIdade) {
    if (!minhaIdade) {throw 'Campo não preenchido, favor preencher-lo'}
}

try { 
    minhaIdade (17)
    console.log ("está é sua idade.")
}
catch (error) {console.log (error)}

//não funciono, n sei o porque :(


//for, while, for of e for in

for (let i = 1; i<=10; i++) { 
   if (i===5) {continue}
    console.log (i)}
    
for (let i = 1; i<=10; i++) { 
   if (i===5) {break}
    console.log (i)}



    //while
let num = 1
while (num <=20) {console.log (num) 
    
    
    num++}


//for of
// let numero = [1,2,3,4]
// for (num of numero) {console.log (num[1])}
//deu problema nesse tbm

let array = ['bianca','guilherme','henzo']

for (item in array) { console.log (array)}

//n entendi a utilidade desse


var x = 1
var y = 2
var z = x + y

console.log (z)