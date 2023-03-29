//Promisses
function Tempo () { 
    setTimeout (
        () => {
            (console.log ('Eu apareci depois, em segundo!'))
              }, 5000);

    console.log ('eu apareci primeiro!')
}
Tempo ()

//pending = estado inicial ou pendente, fulfilled = concluida, rejected = falha
//.then () = executa após o sucesso da operação. Caso a operação der erro deverá ter um .rejected = dará a informação que a operação falhou. Tem o .finally () que executa idependente do resultado



const n = new Promise ( (resolve, rejeita) => {
    let n = 1
    if (n >2) { resolve()}
    else { rejeita ()}

})

n
.then (resultado => console.log ('resultado correto'))
.catch (erro => console.log('resultado incorreto'))
.finally(final =>console.log ('final'))
//com strings não funciona (eu acho)


// const fristUser = (IdDoUsuario) => { let response = fetch (`https://jsonplaceholder.typicode.com/todos/${IdDoUsuario}`)
// .then (resposta => resposta.json()).then (data => console.log (data)) }
// fristUser (1)

//async / await


const fristUser = async (IdDoUsuario) => { let response = await fetch (`https://jsonplaceholder.typicode.com/todos/${IdDoUsuario}`)
 let resultJson = await response.json ()
 //let data = resultJson.title

console.log (resultJson) }
fristUser (6)

//try e catch

async function User () { try
{let response = await fetch (`https://sonplaceholder.typicode.com/todos/`);
let data = await response.json()
console.log (data)}
catch (erro) { console.log (`Erro -->`, erro)
throw new Error ('Erro no fetch')} 
finally {console.log ('Finally realizado após erro')}}
User()


