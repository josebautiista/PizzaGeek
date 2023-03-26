import { Producto } from "./objetos/producto.js"

export const crearProductos = (section) => {

    const productos = [new Producto(1, 2, 'Pizza Hawaiana', './Assets/imagenes/haw.jpg', 8000, 'tradicionales', 'Queso doble crema, jamón y piña', 0, ' ', ' ', 'Porcion', 'Hawaina', 'Queso doble crema, jamón y piña'), 
                       new Producto(2, 4, 'Pizza Pollo y Champiñones', './Assets/imagenes/pollo.jpg', 8000, 'tradicionales', 'Queso doble crema, pollo y champiñones', 0, ' ', ' ', 'porcion', 'Pollo Y Champiñones', 'Queso doble crema, pollo y champiñones') 
                       ]

    const tradicionales = document.createElement('div')
    tradicionales.classList.add('productos__tradicionales')
    section.appendChild(tradicionales)

    const titulo = document.createElement('h1')
    titulo.classList.add('productos__titulo')
    titulo.innerHTML = 'Tradicionales'
    tradicionales.appendChild(titulo)

    const tarjetaProducto = document.createElement('div')
    tarjetaProducto.classList.add('productos__tarjetas')
    tradicionales.appendChild(tarjetaProducto)

    for (let i = 0; i < productos.length; i++) {
        const tarjeta = document.createElement('div')
        tarjeta.classList.add('tarjeta')

        const imagenTarjeta = document.createElement('div')
        imagenTarjeta.classList.add('imagen__producto')
        imagenTarjeta.style.background=`url(${productos[i]._imagen})`
        tarjeta.appendChild(imagenTarjeta)

        const contenidoTarjeta = document.createElement('div')
        contenidoTarjeta.classList.add('contenido__producto')
        contenidoTarjeta.innerHTML = `
        <h1 class="sabor">${ productos[i]._sabor }</h1>
        <p class="desde">Desde: <span class="precio">$${productos[i]._precio} </span></p>
        <p class="verProducto"> Ver Producto </p>
        `
        tarjeta.appendChild(contenidoTarjeta)

        tarjetaProducto.appendChild(tarjeta)


    }

}