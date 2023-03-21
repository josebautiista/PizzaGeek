import { buscar } from "./Assets/components/buscar.js"
import { Carrito } from "./Assets/components/objetos/carrito.js";
import { Cliente } from "./Assets/components/objetos/cliente.js";
import { login } from "./Assets/components/objetos/login.js";
import { Producto } from "./Assets/components/objetos/producto.js";


login()
const botonBuscar = document.getElementById('buscarBtn')
const user = document.getElementById('user')
const searchInput = document.getElementById('inputBuscar');
const searchResults = document.getElementById('resultados');

buscar(searchInput,searchResults, botonBuscar)


user.addEventListener('click', ()=>{
    alert('hola')
})
