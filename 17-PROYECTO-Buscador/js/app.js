//Variables
const marca = document.querySelector("#marca")
const year = document.querySelector("#year")
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision")
const color = document.querySelector("#color")

//Contenedor para los resultados
const resultado = document.querySelector("#resultado")

//Obtener rango de ali
const max = new Date().getFullYear()
const min = max - 15

//Generar un objeto con las busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
}

//Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos) //Muestra los carros al cargar

  //Llena las opciones de años
  llenarSelect()
})

//Event listener para los select de busqueda
marca.addEventListener("change", llenarDatosBusqueda)
year.addEventListener("change", llenarDatosBusqueda)
minimo.addEventListener("change", llenarDatosBusqueda)
maximo.addEventListener("change", llenarDatosBusqueda)
puertas.addEventListener("change", llenarDatosBusqueda)
transmision.addEventListener("change", llenarDatosBusqueda)
color.addEventListener("change", llenarDatosBusqueda)

//Funciones
function mostrarAutos(autos){

  limpiarHTML()

  autos.forEach( auto => {
  
    const {marca, modelo, year, puertas, transmision, precio, color} = auto
    const autoHTML = document.createElement("p")

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
    `

    //Insertar en el HTML
    resultado.appendChild(autoHTML)
  })
}

function limpiarHTML(){
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild)
  }
}

function llenarDatosBusqueda(e){
  datosBusqueda[e.target.id] = e.target.value
  filtrarAuto()
}

//Genera los años del select
function llenarSelect(){
  for(let i = max; i >= min; i--){
    const opcion = document.createElement("option")
    opcion.value = i
    opcion.text = i
    year.appendChild(opcion)
  }
}

//Funcion que filtra en base a la busqueda
function filtrarAuto(){
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

  if(resultado.length){
    mostrarAutos(resultado)
  } else{
    noResultado()
  }

}

function noResultado(){

  limpiarHTML()

  const noResultado = document.createElement("div")
  noResultado.classList.add("alerta", "error")
  noResultado.textContent = "No hay resultados, Intenta con otros terminos de busqueda"

  resultado.appendChild(noResultado)
}

function filtrarMarca(auto){
  const { marca } = datosBusqueda 
  if(marca){
    return auto.marca === marca
  }
  return auto
}


function filtrarYear(auto){
  const { year } = datosBusqueda
  if(year){
    return auto.year === parseInt(year)
  }
  return auto
}

function filtrarMinimo(auto){
  const { minimo } = datosBusqueda
  if(minimo){
    return auto.precio >= minimo
  }
  return auto
}

function filtrarMaximo(auto){
  const { maximo } = datosBusqueda
  if(maximo){
    return auto.precio <= maximo
  }
  return auto
}

function filtrarPuertas(auto){
  const { puertas } = datosBusqueda
    if(puertas){
      return auto.puertas === parseInt(puertas)
    }
  return auto
}

function filtrarTransmision(auto){
  const { transmision } = datosBusqueda
    if(transmision){
      return auto.transmision === transmision
    }
  return auto
}

function filtrarColor(auto){
  const { color } = datosBusqueda
    if(color){
      return auto.color === color
    }
  return auto
}