// Variables

const formulario = document.querySelector("#formulario")
const listaTweets = document.querySelector("#lista-tweets")
let tweets = []

//Event Listeners
eventListeners()
function eventListeners(){
  //Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet)

  //Cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || []
    crearHTML()
  })
}


//Funciones
function agregarTweet(e){
  e.preventDefault()

  //Textarea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value
  
  //Validacion
  if(tweet === ""){
    mostrarError("Los tweets no puede ir vacio")
    return
  }

  const tweetObj = {
    id: Date.now(),
    texto: tweet
  }

  //Añadir al arreglo de tweets
  tweets = [...tweets, tweetObj]

  //Crear HTML
  crearHTML()

  //Resetear formulario
  formulario.reset()
}

//Mostrar mensaje de error
function mostrarError(error){
  const mensajeError = document.createElement("p")
  mensajeError.textContent = error
  mensajeError.classList.add("error")

  //Insertarlo en el contenido
  const contenido = document.querySelector("#contenido")
  contenido.appendChild(mensajeError)

  //Elimina la alerta luego de 3 segundos
  setTimeout(() => {
    mensajeError.remove()
  }, 3000)
}

//Muestra un listado de los tweets
function crearHTML(){

  limpiarHTML()

  if(tweets.length > 0){
    tweets.forEach((tweet) => {
      //Agregar boton eliminar
      const btnEliminar = document.createElement("a")
      btnEliminar.classList.add("borrar-tweet")
      btnEliminar.textContent = "X"

      //Añadir la funcion de eliminar
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id)
      }

      //Crear el HTML
      const li = document.createElement("li")

      //Añadir texto
      li.textContent = tweet.texto

      //Asignar boton
      li.appendChild(btnEliminar)
      
      //Insertando el HTML
      listaTweets.appendChild(li)
    })
  }

  sincronizarStorage()
}

//Agrega los tweets actuales a LocalStorage
function sincronizarStorage(){
  localStorage.setItem("tweets", JSON.stringify(tweets))
}

//Elimina un tweet
function borrarTweet(id){
  tweets = tweets.filter( tweet => tweet.id !== id)
  crearHTML()
}

//Limpiar HTML
function limpiarHTML(){
  while(listaTweets.firstChild){
    listaTweets.removeChild(listaTweets.firstChild)
  }
}