import { buscar } from "./Assets/components/buscar.js"
import { login } from "./Assets/components/login.js";
import { home } from "./Assets/components/home.js";
import { carrito } from "./Assets/components/carrito.js";


const botonBuscar = document.getElementById('buscarBtn')
const user = document.getElementById('user')
const searchInput = document.getElementById('inputBuscar');
const searchResults = document.getElementById('resultados');
const main = document.querySelector('main')
const sectionLogin = document.querySelector('.login')
const sectionBuscar = document.querySelector('.main__buscador-resultados')
const sectionHome = document.querySelector('#home')
const btnLogo = document.querySelector('.header__logo-img')
const sectionCarrito = document.querySelector('#carrito')
const btnCarrito = document.querySelector('.header__carrito-img')

btnCarrito.addEventListener('click', ()=>{
    carrito(sectionCarrito)
})

btnLogo.addEventListener('click', ()=>{
    home(sectionHome)
})
home(sectionHome)


searchInput.addEventListener('click', ()=>{
    buscar(searchInput,searchResults, botonBuscar)
})


user.addEventListener('click', ()=>{
    login(main, sectionLogin)
})
