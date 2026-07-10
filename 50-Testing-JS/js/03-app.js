// Probar 2 valores

function sumar(a,b){
  return a + b
}

function restar(a,b){
  return a - b
}

async function sumaAsync(a,b){
  return Promise.resolve(sumar(a,b))
}

let resultado = sumar(1,2)
let esperado = 3

expected(esperado).toBe(resultado)
expected(esperado).toEqual(resultado)

resultado = restar(10,5)
esperado = 5

expected(esperado).toBe(resultado)

test("Suma 10 + 20 = 30", async () => {
  const resultado = await sumaAsync(10,20)
  const esperado = 30
  expected(esperado).toBe(resultado)
})

function expected(esperado){
  return {
    toBe(resultado){
      if(resultado !== esperado){
        console.error(`El ${resultado} es diferente a lo esperado; la prueba no paso`)
      }else{
        console.log("La prueba fue exitosa")
      }
    },
    toEqual(resultado){
      if(resultado !== esperado){
        console.error(`El ${resultado} no es igual; la prueba no paso`)
      }else{
        console.log("La prueba fue exitosa")
      }
    }
  }
}

async function test(mensaje, callback){
  try {
    await callback()
    console.log(`El Test: ${mensaje}, se ejecuto correctamente`)
  } catch (error) {
    console.error("error")
    console.error(error)
  }
}