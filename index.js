import { buscar } from "./Assets/components/buscar.js"
import { Carrito } from "./Assets/components/objetos/carrito.js";
import { Cliente } from "./Assets/components/objetos/cliente.js";
import { login } from "./Assets/components/objetos/login.js";
import { Producto } from "./Assets/components/objetos/producto.js";


const botonBuscar = document.getElementById('buscarBtn')
const user = document.getElementById('user')
const searchInput = document.getElementById('inputBuscar');
const searchResults = document.getElementById('resultados');
const main = document.querySelector('main')
const sectionLogin = document.querySelector('.login')
const sectionBuscar = document.querySelector('.main__buscador-resultados')

searchInput.addEventListener('click', ()=>{
    buscar(searchInput,searchResults, botonBuscar, sectionLogin)
})


user.addEventListener('click', ()=>{
    login(main, sectionLogin, sectionBuscar)
})
