const enlace = document.createElement("a")

//Agregando texto
enlace.textContent = "Nuevo Enlace"

//Agregando href
enlace.href = "/nuevo-enlace"

enlace.target = "_blank"

enlace.setAttribute("data-enlace", "nuevo-enlace")

enlace.classList.add("alguna-clase")

console.log(enlace)

//Seleccionar la navegacion
const navegacion = document.querySelector(".navegacion")
console.log(navegacion.children)
navegacion.insertBefore(enlace,navegacion.children[1])

//Crear un card
const parrafo1 = document.createElement("p")
parrafo1.textContent = "Concierto"
parrafo1.classList.add("categoria", "concierto")

const parrafo2 = document.createElement("p")
parrafo2.textContent = "Concierto de Rock"
parrafo2.classList.add("titulo")

const parrafo3 = document.createElement("p")
parrafo3.textContent = "$800 por persona"
parrafo3.classList.add("precio")

//Crear div con clase de info
const info = document.createElement("div")
info.classList.add("info")
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

//Crear la imagen
const imagen = document.createElement("img")
imagen.src = "img/hacer2.jpg"
imagen.alt = "texto alternativo"

//Crear el card
const card = document.createElement("div")
card.classList.add("card")

//Asignar la imagen
card.appendChild(imagen)

//Asignar info
card.appendChild(info)

//Insertar en el HTML
const contenedor = document.querySelector(".hacer .contenedor-cards")
contenedor.appendChild(card)