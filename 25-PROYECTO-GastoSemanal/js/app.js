//Variables y selectores
const formulario = document.querySelector("#agregar-gasto")
const gastoListado = document.querySelector("#gastos ul")

//Eventos

eventListeners()
function eventListeners(){
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto)

  formulario.addEventListener("submit", agregarGasto)
}

// Clases

class Presupuesto {
  constructor(presupuesto){
    this.presupuesto = Number(presupuesto)
    this.restante = Number(presupuesto)
    this.gastos = []
  }
}

class UI {
  insertarPresupuesto(cantidad){
    const {presupuesto, restante} = cantidad

    //Agregar al HTML
    document.querySelector("#total").textContent = presupuesto
    document.querySelector("#restante").textContent = restante
  }

  imprimirAlerta(mensaje, tipo){
    //Crear el div
    const divMensaje = document.createElement("div")
    divMensaje.classList.add("text-center", "alert")

    if(tipo === "error"){
      divMensaje.classList.add("alert-danger")
    }else{
      divMensaje.classList.add("alert-success")
    }

    //Agregar mensaje
    divMensaje.textContent = mensaje

    //Insertamos en el HTML
    document.querySelector(".primario").insertBefore(divMensaje, formulario)

    //remover alerta
    setTimeout(() => {
      divMensaje.remove()
    }, 3000);
  }
}

//Instanciar clases
let presupuesto
const ui = new UI()

//Funciones

function preguntarPresupuesto(){
  const presupuestoUsuario = prompt("¿Cual es tu presupuesto?")
  
  if(presupuestoUsuario === "" || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
    window.location.reload()
  }

  //Presupuesto valido
  presupuesto = new Presupuesto(presupuestoUsuario)

  ui.insertarPresupuesto(presupuesto)
}

function agregarGasto(e){
  e.preventDefault()

  //Leer los datos del formulario
  const nombre = document.querySelector("#gasto").value
  const cantidad = document.querySelector("#cantidad").value

  //Validar
  if(nombre === "" || cantidad === ""){
    ui.imprimirAlerta("Ambos campos son obligatorios", "error")
  }
}