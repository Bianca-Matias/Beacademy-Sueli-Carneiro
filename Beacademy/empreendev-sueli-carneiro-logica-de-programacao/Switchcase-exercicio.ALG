Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 07/02/2023
Var
// Seção de Declarações das variáveis 
num1,num2: real;
opr: caractere;
resultado: real;

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva ("primeiro num   ")
leia (num1)
escreva ("segundo num   ")
leia (num2)
escreva ("operação  ")
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
escreva ("seu resultado é: ", resultado)
fimse
Fimalgoritmo
