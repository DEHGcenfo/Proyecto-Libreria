const tablaNoFiccion = document.querySelector('#tbNoFiccion tbody')

const agregarNoFiccion = () => {
    tablaNoFiccion.innerHTML = ''

    listaNoFiccion.forEach(llamarGeneroLit => {


        let crearFila = tablaNoFiccion.insertRow()
        crearFila.insertCell().innerHTML = llamarGeneroLit.Foto
        crearFila.insertCell().innerHTML = llamarGeneroLit.Género
        crearFila.insertCell().innerHTML = llamarGeneroLit.editar


    })
}

agregarNoFiccion()