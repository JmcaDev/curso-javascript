//Class declaration
class Cliente {
  constructor(nombre, saldo){
    this.nombre = nombre
    this.saldo = saldo
  }

}

const jose = new Cliente("Jose", 400)
console.log(jose)

//Class expression
const Cliente2 = class {
  constructor(nombre, saldo){
    this.nombre = nombre
    this.saldo = saldo
  }

}

const jose2 = new Cliente2("jose2", 800)
console.log(jose2)