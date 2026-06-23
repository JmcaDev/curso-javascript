//Class declaration
class Cliente {
  constructor(nombre, saldo){
    this.nombre = nombre
    this.saldo = saldo
  }

  mostrarInformacion(){
    return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`
  }

  static bienvenida(){
    return `Bienvenido al cajero`
  }
}

const jose = new Cliente("Jose", 400)
console.log(jose.mostrarInformacion())
console.log(jose)
console.log(Cliente.bienvenida())

//Class expression
const Cliente2 = class {
  constructor(nombre, saldo){
    this.nombre = nombre
    this.saldo = saldo
  }

  mostrarInformacion(){
    return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`
  }

  static bienvenida(){
    return `Bienvenido al cajero`
  }
}

const jose2 = new Cliente2("jose2", 800)
console.log(jose2)
console.log(jose2.mostrarInformacion())
console.log(Cliente2.bienvenida())