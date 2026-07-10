function sumar(a,b){
  return a + b
}

function restar(a,b){
  return a - b
}

describe("Testing funciones", () => {
  test("Suma de 20 y 30", () => {
    expect(sumar(20,30)).toBe(50)
  })

  test("Resta de 40 y 50", () => {
    expect(restar(40,50)).toBe(-10)
  })

  test("Que la suma: 10 + 10 != 10", () => {
    expect(sumar(10,10)).not.toBe(10)
  })

  test("Que la resta: 10 - 5 != 2", () => {
    expect(restar(10,5)).not.toBe(2)
  })
})