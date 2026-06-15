const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, index) => {
  if(mes.toLowerCase() === "abril"){
    console.log(`Encontrado en el indice ${index}`)
  }
})

const indice = meses.findIndex(mes => mes === "Diciembre")
console.log(indice)

const indiceCarrito = carrito.findIndex(producto => producto.nombre.toLowerCase() === "celular")
console.log(indiceCarrito)