const tablaListar = document.querySelector('#tbListaLibro tbody')

const agregarLibro = () => {
    tablaListar.innerHTML = ''

    listaLibro.forEach(llamarLibro => {
        let crearFila = tablaListar.insertRow()
        crearFila.insertCell().innerHTML = llamarLibro.Foto
        crearFila.insertCell().innerHTML = llamarLibro.Nombre
        crearFila.insertCell().textContent = llamarLibro.Descripción
        crearFila.insertCell().innerHTML = llamarLibro.Plumas
        crearFila.insertCell().textContent = llamarLibro.Precio

    })
}


agregarLibro()