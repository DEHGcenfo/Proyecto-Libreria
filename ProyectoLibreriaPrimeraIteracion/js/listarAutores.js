const tablaAutores = document.querySelector('#tbListaAutores tbody')

const agregarLibro = () => {
    tablaAutores.innerHTML = ''

    listaLibro.forEach(llamarAutor => {
        let crearFila = tablaAutores.insertRow()
        crearFila.insertCell().innerHTML = llamarAutor.Foto
        crearFila.insertCell().innerHTML = llamarAutor.Nombre

    })
}


agregarLibro()