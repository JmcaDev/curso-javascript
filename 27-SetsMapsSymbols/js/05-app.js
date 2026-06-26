//Symbols
const sym = Symbol('1')
const sym2 = Symbol('1')

const nombre = Symbol()
const apellido = Symbol()

const persona = {}

//Agregar nombre y apellido como llaves del objeto
persona[nombre] = "Jose"
persona[apellido] = "Castillo"
persona.tipoCliente = "Premium"
persona.saldo = 500

console.log(persona)
console.log(persona[nombre])

//Las propiedades que utilizan un symbol no son iterables
for(let i in persona){
  console.log(i)
}

//Definir una descripcion del symbol
const nombreCliente = Symbol("Nombre del cliente")
const cliente = {}

cliente[nombreCliente] = "Miguel"

console.log(cliente)