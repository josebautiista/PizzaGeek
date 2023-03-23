import { ocultarTodo } from "./ocultarTodo.js"

export const carrito = (section)=>{
    ocultarTodo()
    section.style.display = 'flex'
    const resumenProductos = document.createElement('div')
    resumenProductos.classList.add('carrito__productos')
    resumenProductos.innerHTML = `<div>
    <img src="./Assets/imagenes/carro-vacio.png" alt="">
    <h1>No tienes productos en tu carrito</h1>
    <button>Ver Productos</button>
    </div>`
    section.appendChild(resumenProductos)

    const resumenCompra = document.createElement('div')
    resumenCompra.classList.add('carrito__compra')
    let subtotal = 0
    let envio =0
    let total = 0
    resumenCompra.innerHTML = `<h1 class="resumen__titulo">RESUMEN DE TU PEDIDO</h1>
    <p class="resumen__contenido">Subtotal<span>${subtotal}</span></p>
    <p class="resumen__contenido">Envio<span></span>${envio}</p>
    <h1 class="resumen__total">TOTAL <span>${total}</span></h1>
    <input type="button" class="hacer__compra" value="Procesar Compra"/>`
    
    section.appendChild(resumenCompra)
}