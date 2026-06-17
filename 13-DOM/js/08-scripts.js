const navegacion = document.querySelector("nav")

console.log(navegacion.firstElementChild)
console.log(navegacion.lastElementChild)
// console.log(navegacion.childNodes) //Los espacios son considerados elementos
// console.log(navegacion.children) //Solo muestra codigo html

// console.log(navegacion.children[1].nodeName)
// console.log(navegacion.children[1].nodeType)

const card = document.querySelector(".card")
// card.children[1].children[1].textContent = "Nuevo parrafo desde traversing the DOM"
// card.children[0].src = "img/hacer3.jpg"
// console.log(card.children[0])

//Traversing de hijo a padre

// console.log(card.parentNode)
// console.log(card.parentElement.parentElement.parentElement)

// console.log(card)
// console.log(card.nextElementSibling)
// console.log(card.nextElementSibling.nextElementSibling)

// const ultimoCard = document.querySelector(".card:nth-child(4)")
// console.log(ultimoCard.previousElementSibling)