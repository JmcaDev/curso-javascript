
const reproductor = {
  reproducir: function(id){
    console.log(`Reproduciendo cancion con el id ${id}...`)
  },
  pausar: function(){
    console.log(`Pausando...`)
  },
  borrar: function(id){
    console.log(`Borrando cancion con id ${id}...`)
  },
  agregarPlaylist: function(nombre){
    console.log(`Agregando playlist con nombre ${nombre}...`)
  },
  reproducirPlaylist: function(nombre){
    console.log(`Reproduciendo playlist ${nombre}...`)
  }
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar(30)
reproductor.agregarPlaylist("Rock")
reproductor.reproducirPlaylist("Pop")