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

//Herencia
class Empresa extends Cliente{
  constructor(nombre, saldo, telefono, categoria){
    super(nombre, saldo)
    this.telefono = telefono
    this.categoria = categoria
  }

  static bienvenida(){ //reescribir un método
    return `Bienvenido al cajero de empresas`
  }
}

const jose = new Cliente("Jose", 400)
const empresa = new Empresa("Jose freelance", 500, 101010, "Programador")
console.log(empresa)

console.log(Cliente.bienvenida())
console.log(Empresa.bienvenida())