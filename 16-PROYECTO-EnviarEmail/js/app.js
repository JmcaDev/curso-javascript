document.addEventListener("DOMContentLoaded", function(){

  const email = {
    email: "",
    asunto: "",
    mensaje: ""
  }

  //Variables de la interfaz
  const inputEmail = document.querySelector("#email")
  const inputCC = document.querySelector("#cc")
  const inputAsunto = document.querySelector("#asunto")
  const inputMensaje = document.querySelector("#mensaje")
  const formulario = document.querySelector("#formulario")
  const btnSubmit = document.querySelector('#formulario button[type="submit"]')
  const btnReset = document.querySelector('#formulario button[type="reset"]')
  const spinner = document.querySelector("#spinner")
  
  //Asignar eventos
  inputEmail.addEventListener("input", validar)
  inputAsunto.addEventListener("input", validar)
  inputCC.addEventListener("input", validar)
  inputMensaje.addEventListener("input", validar)

  formulario.addEventListener("submit", enviarEmail)

  btnReset.addEventListener("click", function(e){
    e.preventDefault()

    //Reiniciar el formulario
    resetFormulario()
  })

  function enviarEmail(e){
    e.preventDefault()

    spinner.classList.add("flex")
    spinner.classList.remove("hidden")

    setTimeout(() => {
      spinner.classList.remove("flex")
      spinner.classList.add("hidden")

      resetFormulario()

      //Crear una alerta
      const alertaExito = document.createElement("p")
      alertaExito.classList.add("bg-green-500", "text-white", "p-2", "text-center", "rounded-lg", "mt-10", "font-bold", "text-sm", "uppercase")

      alertaExito.textContent = "Mensaje enviado correctamente"

      formulario.appendChild(alertaExito)

      setTimeout(() => {
        alertaExito.remove()
      }, 3000)

    }, 3000)
  }

  function validar(e){
    const referencia = e.target.parentElement
    const mensaje = `El campo ${e.target.id} es obligatorio`

    if(e.target.value.trim() === "" && e.target.id !== "cc"){
      mostrarAlerta(mensaje, referencia)
      email[e.target.name] = ""
      comprobarEmail()
      return
    }

    if((e.target.id === "email" || e.target.id === "cc") && !validarEmail(e.target.value)){
      mostrarAlerta(`El ${e.target.id} no es valido`, referencia)
      email[e.target.name] = ""
      comprobarEmail()
      return
    }

    limpiarAlerta(referencia)
    
    //Asignar los valores
    email[e.target.name] = e.target.value.trim().toLowerCase()
    
    //Comprobar el objeto de email
    comprobarEmail()
  }

  function mostrarAlerta(mensaje, referencia){
    limpiarAlerta(referencia)

    //Generar alerta en HTML
    const error = document.createElement("p")
    error.textContent = mensaje
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center")
    
    //Inyectar el error al formulario
    referencia.appendChild(error)
  }

  function limpiarAlerta(referencia){
    //Comprueba si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600")
    if(alerta){
      alerta.remove()
    }
  }

  function validarEmail(email){
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    const resultado = regex.test(email)
    return resultado
  }

  function comprobarEmail(){
    if(Object.values(email).includes("")){
      btnSubmit.classList.add("opacity-50")
      btnSubmit.disabled = true
      return
    }

    btnSubmit.classList.remove("opacity-50")
    btnSubmit.disabled = false
  }

  function resetFormulario(){
    //Reiniciar el objeto
    email.email = ""
    email.asunto = ""
    email.mensaje = ""
    formulario.reset()
    comprobarEmail()
  }

})