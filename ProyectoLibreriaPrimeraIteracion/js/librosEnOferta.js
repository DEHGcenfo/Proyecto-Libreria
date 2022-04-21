const tablaListar = document.querySelector('#tbLibrosOfertas tbody')

const agregarLibro = () => {
    tablaListar.innerHTML = ''

    listaLibrosOferta.forEach(llamarLibroOferta => {
        let crearFila = tablaListar.insertRow()
        crearFila.insertCell().innerHTML = llamarLibroOferta.Foto
        crearFila.insertCell().innerHTML = llamarLibroOferta.Nombre
        crearFila.insertCell().innerHTML = llamarLibroOferta.Descripción
        crearFila.insertCell().innerHTML = llamarLibroOferta.Plumas
        crearFila.insertCell().textContent = llamarLibroOferta.Descuento
        crearFila.insertCell().textContent = llamarLibroOferta.Precio
        crearFila.insertCell().textContent = llamarLibroOferta.Comprar


    })
}


agregarLibro()