const cliente = {
  nombre: "Jose",
  balance: 500
}

describe("Testing al cliente", () => {
  test("El cliente es premium", () => {
    expect(cliente.balance).toBeGreaterThan(400)
  })

  test("El cliente es jose", () => {
    expect(cliente.nombre).toBe("Jose")
  })

  test("No es otro cliente", () => {
    expect(cliente.nombre).not.toBe("Pedro")
  })

  test("No tiene 400", () => {
    expect(cliente.balance).not.toBe(400)
  })
})