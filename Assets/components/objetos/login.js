export const login = (main, section, sectionBuscar) => {

    section.innerHTML=''
    section.style.display='flex'
    sectionBuscar.style.display='none'
    
    const divTitulo = document.createElement('div')
    divTitulo.classList.add('titulo__login')
    divTitulo.innerHTML = `<h2 id='singup'>Registro de Usuario </h2><p> / </p><h2 id='login'>Iniciar Sesión</h2>`
    section.appendChild(divTitulo)

    const divContenido = document.createElement('div')
    divContenido.innerHTML =`
     <form id="inicioSesion">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Escribe tu correo electrónico" required>

        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" placeholder="Escribe tu contraseña" required>

        <button type="submit">Iniciar Sesión</button>
        </form>

        <form id="registrar">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" placeholder="Escribe tu nombre completo" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Escribe tu correo electrónico" required>

        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" placeholder="Escribe tu contraseña" required>

        <label for="confirm-password">Confirmar Contraseña:</label>
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirma tu contraseña" required>

        <button type="submit">Registrarse</button>
        </form>
        
        `
    section.appendChild(divContenido)
    main.appendChild(section)
    document.querySelector('#registrar').style.display='none'


    document.querySelector('#login').addEventListener('click', ()=>{
        document.querySelector('#registrar').style.display='none'
        document.querySelector('#inicioSesion').style.display='block'
    })

    
    document.querySelector('#singup').addEventListener('click', () => {
        document.querySelector('#registrar').style.display='block'
        document.querySelector('#inicioSesion').style.display='none'
    })
}