//modificando dados



console.log ('9' + 20); //aqui 9 é categorizado como string, entt fica 920 -> se colocar typeof vai dizer que é string
console.log (Number ('9')+20) //aqui ocorre uma modificação do dado de string para numero, fazendo com que seja 29 (9 (numero) + 20 (numero))


let TamanhoPalavra = 'UmaPalavraGrande'
console.log (TamanhoPalavra.length)
//resultado = 16 letras  - length pega e mostra o tanto de letras que a palavra tem

let frase = 'OOOOOOOOOOOOOOOWOOOOOOOOOOOOOOOOOOOOOOO Eu So Uma Frase Muito Loca'
console.log (frase.toUpperCase ()) //faz com que toda frase fique em maiusculo. Nota: já que é uma função, devendo por ()
console.log (frase.toLowerCase ()) //faz toda frase ficar em minusculo
console.log (frase) //frase normal

let numerointeiro = 3.94892472074
console.log (parseInt(numerointeiro)) //o numero vai ficar inteiro agora, sendo 3
//nota, usar essas modificações que aparecem no começo sempre deve seguir a risca, se eu escrever parseint em minusculo já não vai e buga

let numerodecimal = 2.231123
console.log (parseFloat (numerodecimal))

let numeroMaluco = 23.21123123
console.log (numeroMaluco.toFixed(2))
console.log (Number (numeroMaluco.toFixed(2)))
//Ele pega o numero e fixa o tanto de casas decimais que eu quero que apareça, no caso: 2
//nota: no primeiro console.log o numero fica em string, caso queira mudar é só por Number e depois a variavel
console.log (numeroMaluco.toFixed(2).replace('.',',')); //nesse caso ele troca o ponto por virgula, mas fica em string (n sei se tem como voltar pra numero)

let outroNumero = 50/16 //divisão de 50 por 16
console.log (outroNumero.toPrecision())  //aqui mostra o dado com precisão, dentro de () não há nenhuma restrição de quantidade de numeros, logo, aparecerá todas as casas decimais do resultado (3.125)
console.log (outroNumero.toPrecision(1)) //aqui tem o bloqueio de apenas 1 numero, então irá aparecer só 3
//nota: estão em string e não em number


let NovaFrase = "oi tudo bom de mais da conta?"
console.log (NovaFrase)
let ArrayDaNovaFrase = NovaFrase.split (' ')
console.log (ArrayDaNovaFrase)
//desconstroi a frase em palavras, se não houver um espaço no (' '), ele vai desconstruir tudo, incluindo palavras

let fraseModificada = ArrayDaNovaFrase.join (' ')
console.log (fraseModificada)
//Split separa, join junta. PS: mesma ideia de retirar o espaço em (' '), mas aqui remove o espaço e gruda tudo.

let StringDeInclusao = "Oi, eu sou um texto"
console.log (StringDeInclusao.includes('Oi'))
//Includes verifica se há uma palavra  X na variavel.

let ArrayComString = [
    "carro",
    "moto",
    "bike",
    "patins"
]
console.log (ArrayComString.includes('patins'))

//manipulando dados 3

const numerosEmString = ['1','2','3','4']
console.log (numerosEmString)

console.log (numerosEmString.push('6','2'))
console.log (numerosEmString)
//coloca os numeros no final
console.log (numerosEmString.unshift('7','8'))
console.log (numerosEmString)
//coloca os numeros no começo

console.log (numerosEmString.shift(''))
console.log (numerosEmString)
//retira numeros

console.log (numerosEmString.pop('6','2'))
console.log (numerosEmString)
//tira numeros do final

console.log (numerosEmString.slice(1,5))
console.log (numerosEmString)
//retira numeros do array em ordem, no caso o item 1 e o item 5

let infonova = numerosEmString.indexOf('6')
console.log (infonova)
//mostra o item 6 -> por causa que indexof (6)
numerosEmString.splice(infonova, 1)
console.log (numerosEmString)
//remove o item 1


