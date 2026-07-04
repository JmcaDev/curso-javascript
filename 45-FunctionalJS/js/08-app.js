const obtenerCliente = () => {
  const nombre = "jose"

  function muestraNombre(){
    console.log(nombre)
  }

  return muestraNombre
}

const cliente = obtenerCliente()

cliente()