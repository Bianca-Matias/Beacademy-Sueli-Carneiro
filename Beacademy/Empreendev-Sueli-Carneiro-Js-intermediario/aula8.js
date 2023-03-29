class customError {constructor (mensagem) { 
    this.mensagem = mensagem }
}

function FeitaPraDarErro () {
    console.log ('Primeira parte funcionou')
    try {
        console.log ('Segunda parte funcionou')
    
    }
    catch (erro) { console.log ('erro na terceira parte')
                   console.error('erro detectado na terceira parte', erro);
        throw new customError ('erro na função 1')}
}

//FeitaPraDarErro()

function FeitaPraDarErro2 () {
    console.log ('primeira parte da segunda function ok')
    try { console.log ('segunda parte da segunda function também está ok')
}   catch (error) { console.log ('Erro na terceira parte da segunda function')}
    console.log ('nenhum erro encontrado na parte tres da segunda function')
}

function main () { console.log ('main em execução') 
try { 
    FeitaPraDarErro ()
    FeitaPraDarErro2 ()
} catch (erroGeral){ console.error (`Bug em uma das duas functions. $`)}}


main ()