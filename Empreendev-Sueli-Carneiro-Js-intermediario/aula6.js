//callback

function nome (nome) {
    console.log (nome)
}

function Name (n) { n ('Bianca')
}

Name (nome)

//qq ta acontecendo aqui:
/* A function nome (em minusculo) é responsavel por fazer o console.log mostrar o nome. a function Name tem n como 'bianca'. Ao colocar Name (nome) as informações de Name (bianca) são jogadas no parametro nome (que ta em laranja) e assim o console interpreta que name é = Bianca */

const P = e => alert ('Alerta vermelho!!! Um clique foi detectado!!!') 

window.addEventListener( 'click', P)
//window é palavra reservada para que o java script interaja com o usuario, click tbm (por mais que seja string)
//O que acontece aqui: Ao clicar a const P é acionada, dando o alerta