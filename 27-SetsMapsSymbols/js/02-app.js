//WeakSet

const weakset = new WeakSet()

const cliente = {
  nombre: "Jose",
  saldo: 1000
}

weakset.add(cliente)

// console.log(weakset.has(cliente))

console.log(weakset.delete(cliente))


console.log(weakset)