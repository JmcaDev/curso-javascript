//forEach

const pendientes =["Tarea", "Comer", "Proyecto", "Estudiar javascript"]

pendientes.forEach( (actividad, indice) => {
  console.log(`${indice} : ${actividad}`)
})

const carrito = [
  {nombre: "Monitor 27 pulgadas", precio:500},
  {nombre: "Television", precio:100},
  {nombre: "Tablet", precio:200},
  {nombre: "Audifonos", precio:300},
  {nombre: "Teclado", precio:400},
  {nombre: "Celular", precio:700}
]

carrito.forEach((producto) => {
  console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`)
})

//map

const nuevoArreglo = carrito.map((producto) => `Nombre: ${producto.nombre} - Precio: ${producto.precio}`)

console.table(nuevoArreglo)