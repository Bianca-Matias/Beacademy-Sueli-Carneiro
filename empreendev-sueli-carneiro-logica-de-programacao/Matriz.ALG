Algoritmo "semnome"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 08/02/2023
Var
// Se��o de Declara��es das vari�veis 
alunos: vetor [1..3] de caractere
notas: vetor [1..3,1..2]de real
l,c: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
para l<-1 ate 3 faca
escreva ("digite o nome do ", l, " aluno: ")
leia (alunos [l])
 para c<-1 ate 2 faca
 escreva ("digite a", c, "nota do ", l , " aluno: ")
 leia (notas[l,c])
 fimpara
fimpara

escreval ("dados dos alunos: ")
para l<-1 ate 3 faca
escreva ("nome do ", l , "aluno: ", alunos [l])
para c<-1 ate 2 faca
escreva (c, "nota:", notas[l , c])
fimpara
escreval ()
//n consegui fazer :( fica bugado
Fimalgoritmo