document.addEventListener("DOMContentLoaded", function(){
  //Variables de la interfaz
  const inputEmail = document.querySelector("#email")
  const inputAsunto = document.querySelector("#asunto")
  const inputMensaje = document.querySelector("#mensaje")
  const formulario = document.querySelector("#formulario")
  
  //Asignar eventos
  inputEmail.addEventListener("blur", validar)
  inputAsunto.addEventListener("blur", validar)
  inputMensaje.addEventListener("blur", validar)

  function validar(e){
    const referencia = e.target.parentElement
    const mensaje = `El campo ${e.target.id} es obligatorio`

    if(e.target.value.trim() === ""){
      mostrarAlerta(mensaje, referencia)
    }else{
      console.log("Si hay algo")
    }
    
  }

  function mostrarAlerta(mensaje, referencia){
    //Generar alerta en HTML
    const error = document.createElement("p")
    error.textContent = mensaje
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center")
    
    //Inyectar el error al formulario
    referencia.appendChild(error)

  }

})