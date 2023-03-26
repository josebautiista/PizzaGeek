import { crearProductos } from "./crearProductos.js"
import { ocultarTodo } from "./ocultarTodo.js"

export const home = (section)=>{

   ocultarTodo()
   section.innerHTML =''
   section.style.display='flex'
   const sectionCarrusel = document.createElement('div')
   sectionCarrusel.classList.add('carrusel')

   const fondos = ['./Assets/imagenes/fondo.jpg', 
                   './Assets/imagenes/fondo1.jpg', 
                   './Assets/imagenes/fondo2.jpg', 
                   './Assets/imagenes/fondo3.jpg', 
                   './Assets/imagenes/fondo4.jpg', 
                   './Assets/imagenes/fondo5.jpg']

   let indiceFondo = 0
   const cambiarFondo = ()=>{
      sectionCarrusel.style.background = `url(${fondos[indiceFondo]})`;
      indiceFondo= (indiceFondo + 1) % fondos.length;
   }
   cambiarFondo()
   setInterval(cambiarFondo, 2000)
   
   section.appendChild(sectionCarrusel)

   crearProductos(section)

}   