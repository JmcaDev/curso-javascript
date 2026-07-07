const nombreCache = "apv-1"
const archivos = [
  "/47-ServiceWorkers-PWA/",
  "/47-ServiceWorkers-PWA/index.html",
  "/47-ServiceWorkers-PWA/error.html",
  "/47-ServiceWorkers-PWA/css/bootstrap.css",
  "/47-ServiceWorkers-PWA/css/styles.css",
  "/47-ServiceWorkers-PWA/js/app.js",
  "/47-ServiceWorkers-PWA/js/apv.js"
]

self.addEventListener("install", (e) => {
  console.log("Instalado el service worker")
  
  e.waitUntil(
    caches.open(nombreCache)
      .then((cache) => {
        console.log("cacheando")
        cache.addAll(archivos)
      })
  )
})

//Activar el service worker
self.addEventListener("activate", (e) => {
  console.log("Service worker activado")
  console.log(e)
})

//Evento fetch para descargar archivos estaticos
self.addEventListener("fetch", (e) => {
  console.log("Fetch... ", e)

  e.respondWith(
    caches.match(e.request)
      .then((respuestaCache) => {
        return respuestaCache
      })
      .catch(() => caches.match("/47-ServiceWorkers-PWA/error.html"))
  )
})