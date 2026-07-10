function Vendedor(nombre){
  this.nombre = nombre
  this.sala = null
}

Vendedor.prototype = {
  oferta: (articulo, precio) => {
    console.log(`Tenemos el siguiente articulo: ${articulo}, iniciamos con un precio de $${precio}`)
  },
  vendido: (comprador) => {
    console.log(`Vendido a ${comprador}`)
  }
}

function Comprador(nombre){
  this.nombre = nombre
  this.sala = null
}

Comprador.prototype = {
  oferta: (cantidad, comprador) => {
    console.log(`${comprador.nombre}: ${cantidad}`)
  }
}

function Subasta(){
  let compradores = {}

  return {
    registrar: (usuario) => {
      compradores[usuario.nombre] = usuario
      usuario.sala = this
    }
  }
}

//Crear objetos
const jose = new Comprador("Jose")
const miguel = new Comprador("Miguel")
const vendedor = new Vendedor("Vendedor de Autos")
const subasta = new Subasta()

subasta.registrar(jose)
subasta.registrar(miguel)
subasta.registrar(vendedor)

vendedor.oferta("Mustang 66", 300)

jose.oferta(350, jose)
miguel.oferta(450, miguel)
jose.oferta(500, jose)

vendedor.vendido("Jose")