Algoritmo "semnome"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 07/02/2023
Var
// Se��o de Declara��es das vari�veis 
num1,num2: real;
opr: caractere;
resultado: real;

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreva ("primeiro num   ")
leia (num1)
escreva ("segundo num   ")
leia (num2)
escreva ("opera��o  ")
leia (opr)
escolha opr
caso "+"
resultado:= num1+num2
caso "-"
resultado:= num1-num2
caso "*"
resultado:= num1*num2
caso "/"
resultado:= num1/num2

outrocaso
resultado:= -1
fimescolha
Se (resultado=-1) entao
escreva("impossivel calcular")
senao
escreva ("seu resultado �: ", resultado)
fimse
Fimalgoritmo
