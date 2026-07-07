//Constructor pattern

class Persona{
  constructor(nombre,email){
    this.nombre = nombre
    this.email = email
  }
}

class Cliente extends Persona{
  constructor(nombre, email, empresa){
    super(nombre, email)
    this.empresa = empresa
  }
}

const persona = new Persona("jose", "jose@jose.com")
console.log(persona)

const cliente = new Cliente("Jose", "cliente@cliente.com", "Programadores")
console.log(cliente)