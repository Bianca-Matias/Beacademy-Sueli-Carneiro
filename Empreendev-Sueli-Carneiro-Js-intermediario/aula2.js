(function HelloWorld () {
    alert ("hello world");
}) ();

//por algum motivo se eu uso essa function junto do código buga

(function (mensagem) { 
 alert (mensagem);
}
) ('Oi mundo!');
//pode ter dois alert, eles aparecem um em seguida do outro, primeiro hello world e dps oi mundo


function sum(a) { return a + 10}
console.log (sum(1))
//quando coloco (sum) e entre parenteses (1) eu to dizendo que o "a" é igual a 1
//No return, ele retorna o valor 10 para ser somado com a, logo a sendo 1 o resultado dará 11
//return ainda é meio complicado pra mim, procurar entender melhor

const soma = a => a + 1;
console.log (soma(1))

const materiais = ['hidrogenio','oxigenio','nitrogenio','metano']
const arrayDeMateriais = materiais.map (materiais => materiais.length)
console.log (arrayDeMateriais) 

//sem arrow funtion:

const newArray = materiais.map ( function MostreTamanho(materiais) {return materiais.length} )
console.log (newArray)