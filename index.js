import { buscar } from "./Assets/components/buscar.js"

const botonBuscar = document.getElementById('buscarBtn')
const user = document.getElementById('user')
const searchInput = document.getElementById('inputBuscar');
const searchResults = document.getElementById('resultados');

buscar(searchInput,searchResults, botonBuscar)


user.addEventListener('click', ()=>{
    alert('hola')
})