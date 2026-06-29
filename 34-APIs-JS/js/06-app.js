const salida = document.querySelector("#salida")
const microfonoBtn = document.querySelector("#microfono")

microfonoBtn.addEventListener("click", ejecutarSpeechAPI)

function ejecutarSpeechAPI(){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new SpeechRecognition()

  recognition.start()

  recognition.onstart = function(){
    salida.classList.add("mostrar")
    salida.textContent = "Escuchando..."
  }

  recognition.onspeechend = function(){
    salida.textContent = "Se dejo de grabar..."
    recognition.stop()
  }

  recognition.onresult = function(e){
    console.log(e.results)
  }
}