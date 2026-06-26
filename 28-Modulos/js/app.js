//Import cliente
import minuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";

//Import empresa
import { Empresa } from "./empresa.js"

console.log(nombreCliente)
console.log(ahorro)
console.log(mostrarInformacion(nombreCliente,ahorro))

tieneSaldo(ahorro)

const cliente = new Cliente(nombreCliente, ahorro)

console.log(cliente)
console.log(cliente.mostrarInformacion())


const empresa = new Empresa("Backend solutions", 100000, "Soluciones Backend dev")
console.log(empresa)
console.log(empresa.mostrarInformacion())

minuevaFuncion()