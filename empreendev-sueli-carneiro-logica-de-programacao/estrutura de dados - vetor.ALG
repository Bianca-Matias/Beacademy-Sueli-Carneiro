Algoritmo "semnome"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 08/02/2023
Var
// Se��o de Declara��es das vari�veis 
produto: vetor[1..10] de caractere
valor: vetor[1..10] de real
i: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
para i<-1 at� 5 faca
escreva ("digite o nome do produto", i, ": ")
leia (produto [i])
escreva ("valor do respectivo produto", i , ": ")
leia (valor[i])
 fimpara
 para i<-1 ate 5 faca
 escreval ("o valor do ", produto [i], " � ",valor [i])
      fimpara
Fimalgoritmo