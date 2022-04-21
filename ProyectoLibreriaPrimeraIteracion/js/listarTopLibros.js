const tablaListar = document.querySelector('#tbListaTopLibros tbody')

const agregarLibro = () => {
    tablaListar.innerHTML = ''

    listaTopLibros.forEach(llamarTopLibros => {
        let crearFila = tablaListar.insertRow()
        crearFila.insertCell().innerHTML = llamarTopLibros.Foto
        crearFila.insertCell().innerHTML = llamarTopLibros.Nombre
        crearFila.insertCell().innerHTML = llamarTopLibros.Descripción
        crearFila.insertCell().innerHTML = llamarTopLibros.Plumas
        crearFila.insertCell().textContent = llamarTopLibros.Precio
        crearFila.insertCell().textContent = llamarTopLibros.Comprar


    })
}


agregarLibro()