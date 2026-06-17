const encabezado = document.querySelector(".contenido-hero h1")
console.log(encabezado)

// console.log(encabezado.innerText) // Si en el css visibility: hidden; no lo va a encontrar
// console.log(encabezado.textContent) // Si lo va a encontrar
// console.log(encabezado.innerHTML) // Trae HTML

// const nuevoHeading = "Nuevo heading"
// document.querySelector(".contenido-hero h1").textContent = nuevoHeading

const imagen = document.querySelector(".card img")
imagen.src = "img/hacer2.jpg"