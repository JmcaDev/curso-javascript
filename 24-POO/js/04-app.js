class Cliente {

  #nombre

  constructor(nombre, saldo){
    this.#nombre = nombre
    this.saldo = saldo
  }

  mostrarInformacion(){
    return `Cliente: ${this.#nombre} - Saldo: ${this.saldo}`
  }

  static bienvenida(){
    return `Bienvenido al cajero`
  }

  setNombre(nombre){
    this.#nombre = nombre
  }

  getNombre(){
    return this.#nombre
  }
}

const jose = new Cliente()
jose.setNombre("Jose")
console.log(jose.mostrarInformacion())