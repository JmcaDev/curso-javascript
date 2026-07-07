//Singleton

let instancia = null

class Persona{
  constructor(nombre, email){
    if(!instancia){
      this.nombre = nombre
      this.email = email
      instancia = this
    }else{
      return instancia
    }
  }
}

const persona = new Persona("jose", "jose@jose.com")
console.log(persona)

const persona2 = new Persona("karen", "karen@karen.com")
console.log(persona2)