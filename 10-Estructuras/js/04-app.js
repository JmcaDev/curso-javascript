const dinero = 100
const totalAPagar = 500
const tarjeta = false
const cheque = true

if(dinero >= totalAPagar){
  console.log("Si podemos pagar")
}else if(tarjeta){
  console.log("Pago por tarjeta")
}else if(cheque){
  console.log("Pago con cheque")
}else{
  console.log("Fondos insuficientes")
}