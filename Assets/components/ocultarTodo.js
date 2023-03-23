export const ocultarTodo = ()=>{

    const main = document.querySelector('main')
    main.querySelectorAll('section').forEach(section =>{
        section.style.display='none'
    })
}