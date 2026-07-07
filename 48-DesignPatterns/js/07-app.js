//Namespace
const restaurantApp = {}

restaurantApp.platillos = [
  {
    platillo: "Pizza",
    precio: 25
  },
  {
    platillo: "Hamburguesa",
    precio: 20
  },
  {
    platillo: "Perro caliente",
    precio: 10
  }
]

restaurantApp.funciones = {
  mostrarMenu: (platillos) => {
    console.log(`Bienvenidos a nuestro menú`)

    platillos.forEach((platillo, index) => {
      console.log(`${index} : ${platillo.platillo} ${platillo.precio}`)
    })
  }
}

const {platillos} = restaurantApp

restaurantApp.funciones.mostrarMenu(platillos)