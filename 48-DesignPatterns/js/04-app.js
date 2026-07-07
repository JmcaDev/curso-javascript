//Factory - crea objetos basados en ciertas condiciones

class InputHTML{
  constructor(type, nombre){
    this.type = type
    this.nombre = nombre
  }

  crearInput(){
    return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`
  }
}

class HTMLFactory{
  crearElemento(tipo, nombre){
    switch(tipo){
      case "text":
        return new InputHTML("text", nombre)
        break
      case "tel":
        return new InputHTML("tel", nombre)
        break
      case "email":
        return new InputHTML("email", nombre)
        break
      default:
        return
    }
  }
}

const elemento = new HTMLFactory()
const InputText = elemento.crearElemento("text", "nombre-cliente")
console.log(InputText.crearInput())

const elemento2 = new HTMLFactory()
const InputText2 = elemento2.crearElemento("tel", "telefono-cliente")
console.log(InputText2.crearInput())

const elemento3 = new HTMLFactory()
const InputText3 = elemento3.crearElemento("email", "email-cliente")
console.log(InputText3.crearInput())