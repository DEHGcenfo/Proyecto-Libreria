const tablaFiccion = document.querySelector('#tbFiccion tbody')

const agregarFiccion = () => {
    tablaFiccion.innerHTML = ''

    listaFiccion.forEach(llamarGeneroLit => {


        let crearFila = tablaFiccion.insertRow()
        crearFila.insertCell().innerHTML = llamarGeneroLit.Foto
        crearFila.insertCell().innerHTML = llamarGeneroLit.Género



    })
}


agregarFiccion()