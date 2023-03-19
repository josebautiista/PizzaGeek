
export const buscar = (buscador, resultados, boton)=>{
    const data = [
        {id: 1, title: "Hawaina", description: "Queso, Piña y jamon"},
        {id: 2, title: "Pollo y champiñones", description: "Queso, pollo y champiñones"},
        {id: 3, title: "Verduras", description: "Queso, tomate, pimenton y champiñon"},
      ];
      
      buscador.addEventListener('input', ()=>{
        if (buscador.value=='') {
            resultados.style.display="none"
        }
      })
      boton.addEventListener('click', function() {
        resultados.style.display='flex'
        const searchTerm = buscador.value.toLowerCase();
        const filteredData = data.filter(function(item) {
          return item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);
        });
      
        displayResults(filteredData);
      });
      
      function displayResults(results) {
        resultados.innerHTML = '';
        results.forEach(function(item) {
          const li = document.createElement('li');
          li.style.listStyle='none'
          li.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          `;
          resultados.appendChild(li);
        });
      
        if (results.length === 0) {
          resultados.style.display="none"
          const li = document.createElement('li');
          li.textContent = 'No se encontraron resultados';
          resultados.appendChild(li);
        }
      }
}
    