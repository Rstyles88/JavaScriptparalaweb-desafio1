precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let sumar = document.querySelector("#sumar")
let restar = document.querySelector("#restar")

sumar.addEventListener("click", ()=>{
    let cantidad = document.querySelector(".cantidad")
    let totalCantidad = parseInt(cantidad.innerHTML)
    cantidad.innerHTML = ++totalCantidad
    let totalPagar = document.querySelector(".valor-total")
    totalPagar.innerHTML= parseInt(cantidad.innerHTML) * precio

})

restar.addEventListener("click", ()=>{
    let cantidad = document.querySelector(".cantidad")
    let totalCantidad = parseInt(cantidad.innerHTML)
    cantidad.innerHTML = Math.max(0, --totalCantidad)
    let totalPagar = document.querySelector(".valor-total")
    totalPagar.innerHTML= parseInt(cantidad.innerHTML) * precio


})

