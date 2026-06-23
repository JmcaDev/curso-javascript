
//Constructores
function Seguro(marca, year, tipo){
  this.marca = marca
  this.year = year
  this.tipo = tipo
}

function UI(){}

//Llena las opciondes de los años
UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear()
  const min = max - 20

  const selectYear = document.querySelector("#year")

  for(let i = max; i > min; i--){
    let option = document.createElement("option")
    option.value = i
    option.textContent = i
    selectYear.appendChild(option)
  }
}

//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipoAlerta) => {
  const div = document.createElement("div")
  div.classList.add("mensaje", "mt-10")

  if(tipoAlerta === "error"){
    div.classList.add("error")
  }else {
    div.classList.add("correcto")
  }

  div.textContent = mensaje

  //Insertar en el HTML
  const formulario = document.querySelector("#cotizar-seguro")
  formulario.insertBefore(div, document.querySelector("#resultado"))

  setTimeout(() => {
    div.remove()
  }, 3000)
}

//Instanciar UI
const ui = new UI()
console.log(ui)

document.addEventListener("DOMContentLoaded", () => {
  ui.llenarOpciones() // Llena el select con los años
})

eventListeners()
function eventListeners(){
  const formulario = document.querySelector("#cotizar-seguro")
  formulario.addEventListener("submit", cotizarSeguro)
}

function cotizarSeguro(e){
  e.preventDefault()

  //Leer la marca seleccionada
  const marca = document.querySelector("#marca").value
  

  //Leer año seleccionado
  const year = document.querySelector("#year").value

  //Leer tipo de cobertura
  const tipo = document.querySelector('input[name="tipo"]:checked').value
  
  if(marca === "" || year === "" || tipo === ""){
    ui.mostrarMensaje("Todos los campos son obligatorios", "error")
    return
  }

  ui.mostrarMensaje("Cotizando...", "exito")
  
  // Instanciar el seguro

  //Utilizar prototype que cotiza el seguro

}