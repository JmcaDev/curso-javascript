//Module pattern

const mostrarCliente = (nombre) => {
  console.log(nombre)
}

export default mostrarCliente

const modulo1 = (function(){
  const nombre = "jose"

  function hola(){
    console.log("hola")
  }

  return {
    nombre,
    hola
  }
})()