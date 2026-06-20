function Cliente(nombre, saldo){
  this.nombre = nombre
  this.saldo = saldo
}

Cliente.prototype.tipoCliente = function(){
  console.log("Desde mi nuevo proto")
}

const pedro = new Cliente("Pedro", 6000)
pedro.tipoCliente()
console.log(pedro)

function Empresa(nombre, saldo, categoria){
  this.nombre = nombre
  this.saldo = saldo
  this.categoria = categoria
}

const CCJ = new Empresa("Codigo con juan", 4000, "Cursos en linea")
console.log(CCJ)