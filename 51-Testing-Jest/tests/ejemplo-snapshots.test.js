const cliente = {
  nombre: "Jose 2",
  balance: 500,
  tipo: "Premium"
}

describe("Testing al cliente", () => {
  test("Es jose", () => {
    expect(cliente).toMatchSnapshot()
  })
})