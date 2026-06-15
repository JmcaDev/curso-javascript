const carrito = []

//Definir un producto
const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400
}

const producto2 = {
  nombre: "Celular",
  precio: 800
}

const producto3 = {
  nombre: "Teclado",
  precio: 50
}

carrito.push(producto)
carrito.push(producto2)
carrito.unshift(producto3)

console.table(carrito)

//Eliminar ultimo elemento del arreglo

// carrito.pop()

// console.table(carrito)

//Eliminar del inicio del arreglo

// carrito.shift()

carrito.splice(1,1)

console.table(carrito)