const cliente = {
  nombre: "jose",
  saldo: 500
}

console.log(cliente)

function Cliente(nombre, saldo){
  this.nombre = nombre
  this.saldo = saldo
}

const jose = new Cliente("Jose", 200)

console.log(jose)