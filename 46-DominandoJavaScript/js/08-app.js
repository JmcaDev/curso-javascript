//Self

self.onload = () => {
  console.log("Ventana lista")
}

window.nombre = "Monitor"
const producto = {
  precio: 30,
  disponible: true,
  mostrarInfo: function(){
    return `El producto: ${self.nombre} tiene un precio de ${self.precio}`
  }
}

console.log(producto.mostrarInfo())