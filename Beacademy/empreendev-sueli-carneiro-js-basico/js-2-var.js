/* Existem variaveis globais (var)
e variaveis locais (const e let)

Const é constante, sendo assim seu valor não muda.
Var e let são tipadas, sendo assim podem ter seu valor alterado. (o valor é no caso se é string, float, boolean? ou é valor valor tipo Bianca, 1 2 3?)

*/

//{} servem para criar um bloco 

console.log('meu nome está escrito?', name)

{let name = 'bianca' //let ta dentro de um escopo
console.log ('meu nome está escrito?', name)}
//let e const é uma variavel que vale apenas para blocos como está acima

{var name = "Matias"} 
//o que acontece aqui? { } pega o var e taca pra cima fazendo a leitura ser primeiro o var, dps console log e dps o let
//Isso se chama hoisting
// var é um escopo global, alterando tudo, menos let pq ele é mais forte naquele local.



const A = ({
    nome : 'Bianca',
    idade : 17,
    peso : 50,
    OqueFaz : 'desenha',
    desenhar:function () {console.log ("ela está desenhando.")}
}
) //porque quando dou console.log (A.desenhar) aparece .function () {console.log ("ela está desenhando.")}? Eu queria que só aparecesse "ela está desenhando"


//Concatenar
    console.log ("A " + A.nome + " está fazendo o que? " + A.desenhar)
//interpolação
    console.log (`A ${A.nome} tem ${A.idade} anos e ${A.peso} quilos.${A.desenhar}`)


const B = [
'madeira', //0
'ferro', //1
'aluminio', //2
'bronze', //3
{ MD: 10, //4
  FR: 20,
  AL: 30,
  BR: 40} // Md madeira, Fr ferro, Al aluminio e Br bronze
]
console.log (B) // aqui está pegando todo array, desde itens ao objeto

console.log (B[3]) //aqui está pegando o item 3 (bronze)
console.log (B[4].BR) // Ele está pegando o item 4 do array (item 4 é um objeto) e pegando o VALOR "BR"