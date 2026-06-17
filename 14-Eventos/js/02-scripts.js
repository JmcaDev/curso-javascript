const nav = document.querySelector(".navegacion")

//Registar un evento
nav.addEventListener("mouseout", () => {
  console.log("saliendo en nav")

  nav.style.backgroundColor = "transparent"
})

nav.addEventListener("mouseenter", () => {
  console.log("entrando en nav")

  nav.style.backgroundColor = "white"
})

// mousedown
// click
// dblclick
// mouseup