const tablaEducacion = document.querySelector('#tbEducacion tbody')

const agregarEducacion = () => {
    tablaEducacion.innerHTML = ''

    listaEducacion.forEach(llamarGeneroLit => {


        let crearFila = tablaEducacion.insertRow()
        crearFila.insertCell().innerHTML = llamarGeneroLit.Foto
        crearFila.insertCell().innerHTML = llamarGeneroLit.Género



    })
}


agregarEducacion()