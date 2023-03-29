//orientação a objeto e classes

class profissionais {
    constructor (area, xp, nome) {
    this.area = area,
    this.Experiencia = xp
    this.nome = nome
}
}

const BiancaPerson = new profissionais  ('design de jogos e concept art', 2, 'Bianca Matias')
const GuiPerson = new profissionais ('Prototipação e programação', 3, 'Guilherme Duarte')

let ListaDeProfissionais = []

ListaDeProfissionais.push (BiancaPerson, GuiPerson)

console.log (ListaDeProfissionais)


///////////////////////////////////////-----------------------------------------//////////////////////////

class Organização { constructor (n, Area, experiencia) {
    this.n = n
    this.area = Area
    this.experiencia = experiencia 
}

    MostrarGrupo (grupo) { return `${this.n} cuida da area: ${this.area}. Tem a experiencia de ${this.experiencia} anos e cuida do grupo ${grupo} `}
}

const Bianca = new Organização ('Bianca Matias', 'Design e concept art', 2)
const GrupoDesign = Bianca.MostrarGrupo ('Design')

console.log (GrupoDesign)
//ver mais sobre constructor e orientação a objeto (POO programação orientada a objeto)

class  Garrafas { constructor (marca, producao, volume){ 
    this.marca = marca,
    this.producao = producao,
    this.volume = volume}

 ItensDaEmpresa (itens) { return `A ${this.marca} produziu ${this.producao} garrafas com o volume de ${this.volume} ml. Vai para categoria de itens:${itens} `}}


const Garrafa = new Garrafas ('Samsung', 60, 800 )
const Empresa = Garrafa.ItensDaEmpresa ('Recipientes para liquidos.')

console.log (Empresa)





////////////////////////////////////////////////////////////
class moveis { constructor (marca, cor, energia) {
    this.marca=marca,
    this.cor=cor,
    this.energia=energia
}}

const ventilador = new moveis ('atlas','azul','220volts')
console.log( ventilador)

//extendendo

class Geladeiras extends moveis {constructor (marca, cor, energia, congelador)
{ super (marca,cor,energia)
    this.congelador = congelador}
}

const geladeira = new Geladeiras ('LG','Rosa','110volts', true)
console.log (geladeira)