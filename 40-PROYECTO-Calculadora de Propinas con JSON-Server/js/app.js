let cliente = {
  mesa: "",
  hora: "",
  pedido: []
}

const categorias = {
  1: "Comida",
  2: "Bebidas",
  3: "Postres"
}

const btnGuardarCliente = document.querySelector("#guardar-cliente")
btnGuardarCliente.addEventListener("click", guardarCliente)

function guardarCliente(){
  const mesa = document.querySelector("#mesa").value
  const hora = document.querySelector("#hora").value

  //Revisar si hay campos vacios
  const camposVacios = [mesa,hora].some(campo => campo === "")

  if(camposVacios){
    //Verificar si ya hay una alerta
    const existeAlerta = document.querySelector(".invalid-feedback")

    if(!existeAlerta){
      mostrarAlerta()
    }

    return
  }

  //Asignando valores
  cliente = {...cliente, mesa, hora}

  //Ocultar modal
  const modalFormulario = document.querySelector("#formulario")
  const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario)
  modalBootstrap.hide()


  //Mostrar las secciones
  mostrarSecciones()

  //Obtener platillos de la API de JSON-Server
  obtenerPlatillos()
}

function mostrarAlerta(){
  const alerta = document.createElement("div")

  alerta.classList.add("invalid-feedback", "d-block", "text-center")
  alerta.textContent = "Todos los campos son obligatorios"
  document.querySelector(".modal-body form").appendChild(alerta)

  setTimeout(() => {
    alerta.remove()
  },3000)
}

function mostrarSecciones(){
  const seccionesOcultas = document.querySelectorAll(".d-none")
  seccionesOcultas.forEach((seccion) => {
    seccion.classList.remove("d-none")
  })
}

function obtenerPlatillos(){
  const url = `http://localhost:3000/platillos`

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => mostrarPlatillos(datos))
    .catch((error) => console.log(error))
}

function mostrarPlatillos(platillos){
  const contenido = document.querySelector("#platillos .contenido")

  platillos.forEach((platillo) => {
    const {id, nombre, precio, categoria} = platillo

    const row = document.createElement("div")
    row.classList.add("row", "py-3", "border-top")

    const nombreDiv = document.createElement("div")
    nombreDiv.classList.add("col-md-4")
    nombreDiv.textContent = nombre

    const precioDiv = document.createElement("div")
    precioDiv.classList.add("col-md-3", "fw-bold")
    precioDiv.textContent = `$${precio}`

    const categoriaDiv = document.createElement("div")
    categoriaDiv.classList.add("col-md-3")
    categoriaDiv.textContent = categorias[categoria] 

    const inputCantidad = document.createElement("input")
    inputCantidad.type = "number"
    inputCantidad.min = 0
    inputCantidad.value = 0
    inputCantidad.id = `producto-${id}`
    inputCantidad.classList.add("form-control")
    
    //Funcion que detecta la cantidad y el platillo que se esta agregando
    inputCantidad.onchange = function(){
      const cantidad = parseInt(inputCantidad.value)
      agregarPlatillo({...platillo, cantidad})
    }

    const agregarInput = document.createElement("div")
    agregarInput.classList.add("col-md-2")
    agregarInput.appendChild(inputCantidad)

    row.appendChild(nombreDiv)
    row.appendChild(precioDiv)
    row.appendChild(categoriaDiv)
    row.appendChild(agregarInput)

    contenido.appendChild(row)
  })
}

function agregarPlatillo(producto){
  //Pedido actual
  let {pedido} = cliente
  //Revisar que la cantidad sea mayor a 0
  if(producto.cantidad > 0){

    //Comprueba si el elemento ya existe en el array
    if(pedido.some((articulo) => articulo.id === producto.id)){
      //El articulo ya existe, actualizamos la cantidad
      const pedidoActualizado = pedido.map((articulo) => {
        if(articulo.id === producto.id){
          articulo.cantidad = producto.cantidad
        }
        return articulo
      })
      //Se asigna el nuevo array
      cliente.pedido = [...pedidoActualizado]
    }else{
      //El articulo no existe, lo agregamos al array
      cliente.pedido = [...pedido, producto]
    }

  }else{
    //Eliminar elementos cuando la cantidad es 0
    const resultado = pedido.filter((articulo) => articulo.id !== producto.id)
    cliente.pedido = [...resultado]
  }

  //Limpiar codigo HTML previo
  limpiarHTML()

  //Mostrar el resumen del pedido
  actualizarResumen()
}

function actualizarResumen(){
  const contenido = document.querySelector("#resumen .contenido")

  const resumen = document.createElement("div")
  resumen.classList.add("col-md-6", "card", "py-5", "px-3", "shadow")

  //Agregando la mesa al HTML
  const mesa = document.createElement("p")
  mesa.textContent = "Mesa: "
  mesa.classList.add("fw-bold")

  const mesaSpan = document.createElement("span")
  mesaSpan.textContent = cliente.mesa
  mesaSpan.classList.add("fw-normal")

  //Agregando la hora al HTML
  const hora = document.createElement("p")
  hora.textContent = "Hora: "
  hora.classList.add("fw-bold")

  const horaSpan = document.createElement("span")
  horaSpan.textContent = cliente.hora
  horaSpan.classList.add("fw-normal")

  mesa.appendChild(mesaSpan)
  hora.appendChild(horaSpan)

  //Titulo de la seccion
  const heading = document.createElement("h3")
  heading.textContent = "Platillos Consumidos"
  heading.classList.add("my-4", "text-center")

  //Iterar sobre pedidos
  const grupo = document.createElement("ul")
  grupo.classList.add("list-group")

  const {pedido} = cliente
  pedido.forEach((articulo) => {
    const {nombre, cantidad, precio, id} = articulo

    const lista = document.createElement("li")
    lista.classList.add("list-group-item")

    const nombreEl = document.createElement("h4")
    nombreEl.classList.add("my-4")
    nombreEl.textContent = nombre

    //Cantidad del articulo
    const cantidadEl = document.createElement("p")
    cantidadEl.classList.add("fw-bold")
    cantidadEl.textContent = "Cantidad: "

    const cantidadValor = document.createElement("span")
    cantidadValor.classList.add("fw-normal")
    cantidadValor.textContent = cantidad

    //Precio del articulo
    const precioEl = document.createElement("p")
    precioEl.classList.add("fw-bold")
    precioEl.textContent = "Precio: "

    const precioValor = document.createElement("span")
    precioValor.classList.add("fw-normal")
    precioValor.textContent = `$${precio}`

    //Subtotal del articulo
    const subtotalEl = document.createElement("p")
    subtotalEl.classList.add("fw-bold")
    subtotalEl.textContent = "subtotal: "

    const subtotalValor = document.createElement("span")
    subtotalValor.classList.add("fw-normal")
    subtotalValor.textContent = calcularSubtotal(precio, cantidad)

    //Boton para eliminar
    const btnEliminar = document.createElement("button")
    btnEliminar.classList.add("btn", "btn-danger")
    btnEliminar.textContent = "Eliminar del Pedido"

    //Funcion para eliminar del pedido
    btnEliminar.onclick = function(){
      eliminarProducto(id)
    }

    //Agregar valores a sus contenedores
    cantidadEl.appendChild(cantidadValor)
    precioEl.appendChild(precioValor)
    subtotalEl.appendChild(subtotalValor)

    //Agregar elementos al LI
    lista.appendChild(nombreEl)
    lista.appendChild(cantidadEl)
    lista.appendChild(precioEl)
    lista.appendChild(subtotalEl)
    lista.appendChild(btnEliminar)

    //Agregar lista al grupo principal
    grupo.appendChild(lista)
  })

  resumen.appendChild(mesa)
  resumen.appendChild(hora)
  resumen.appendChild(heading)
  resumen.appendChild(grupo)


  contenido.appendChild(resumen)
}

function calcularSubtotal(precio, cantidad){
  return `$${precio * cantidad}`
}

function eliminarProducto(id){
  const {pedido} = cliente
  const resultado = pedido.filter((articulo) => articulo.id !== id)
  cliente.pedido = [...resultado]

  //Limpiar codigo HTML previo
  limpiarHTML()

  //Mostrar el resumen del pedido
  actualizarResumen()
}

function limpiarHTML(selector){
  const contenido = document.querySelector("#resumen .contenido")
  while(contenido.firstChild){
    contenido.removeChild(contenido.firstChild)
  }
}