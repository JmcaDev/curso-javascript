import { sumar } from "../js/funciones.js";

describe("Suma de 2 numeros", () => {
  test("Sumar 10 y 20 = 30", () => {
    expect(sumar(10,20)).toBe(30)
  })
})