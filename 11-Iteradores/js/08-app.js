const automovil = {
  modelo: "Camaro",
  year: 2000,
  motor: "6.0"
}

for(let propiedad in automovil){
  console.log(`${automovil[propiedad]}`)
}

for( let [llave, valor] of Object.entries(automovil)){
  console.log(valor)
}