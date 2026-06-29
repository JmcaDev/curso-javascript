document.addEventListener("visibilitychange", () => {
  if(document.visibilityState === "visible"){
    console.log("Estas en la pagina:", document.visibilityState)
  }else{
    console.log("Ya no estas en la pagina:", document.visibilityState)
  }
})