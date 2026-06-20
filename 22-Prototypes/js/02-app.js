function Cliente(nombre, saldo){
  this.nombre = nombre
  this.saldo = saldo
}

const jose = new Cliente("Jose", 200)

function formatearCliente(cliente){
  const {nombre, saldo} = cliente
  return `El cliente ${nombre} tiene un saldo de: ${saldo}`
}

function formatearEmpresa(empresa){
  const {nombre, saldo, categoria} = empresa
  return `La empresa ${nombre} tiene un saldo de: ${saldo} y pertenece a la categoria ${categoria}`
}


console.log(formatearCliente(jose))

function Empresa(nombre, saldo, categoria){
  this.nombre = nombre
  this.saldo = saldo
  this.categoria = categoria
}

const CCJ = new Empresa("Codigo con juan", 4000, "Cursos en linea")
console.log(formatearEmpresa(CCJ))