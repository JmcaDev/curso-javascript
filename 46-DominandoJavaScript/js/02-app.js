//hoisting

obtenerCliente("Jose")
function obtenerCliente(nombre){
  console.log(`El nombre del cliente es: ${nombre}`)
}

obtenerCliente2("Castillo")
const obtenerCliente2 = function(nombre){
  console.log(`El nombre del cliente es: ${nombre}`)
}