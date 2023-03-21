export const login = () => {

    const main = document.querySelector('main')
    const div = document.createElement('div')
    div.innerHTML =`<h2 id='singup'>Registro de Usuario </h2><h2 id='login'> / Iniciar Sesión</h2>`
    div.classList.add('titulo__login')
    main.appendChild(div)
    const section = document.createElement('section')
    main.appendChild(section)

    document.querySelector('#singup').addEventListener('click', () => {

    
        section.innerHTML=''
        section.innerHTML = `<form>
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
    })

    document.querySelector('#login').addEventListener('click', ()=>{
        
        section.innerHTML=''
        section.innerHTML = `<form>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Escribe tu correo electrónico" required>

        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" placeholder="Escribe tu contraseña" required>

        <button type="submit">Iniciar Sesión</button>
        </form>
        `
    })

    
}