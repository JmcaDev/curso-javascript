const usuario = false
const puedePagar = false

if(usuario && puedePagar){
  console.log("Si eres usuario y puede pagar")
}else if(!usuario && !puedePagar){
  console.log("No puedes comprar")
}else if(!puedePagar){
  console.log("Saldo insuficiente")
}else if(!usuario){
  console.log("No eres usuario")
}