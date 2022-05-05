const cuerpoTabla = document.querySelector('#tbCarritoCompras')

let listaDeLibros = []

const inicializar = async() => {
    let data = {
        correo: JSON.parse(localStorage.getItem('usuarioConectado')).correo

    };
    listaDeLibros = await obtenerDatosConParametro('listar-compra-por-correo', data)
    mostrarDatos()
}

const mostrarDatos = () => {
    cuerpoTabla.innerHTML = ''
    listaDeLibros.forEach(llamarObjetos => {

        let fila = cuerpoTabla.insertRow()

        fila.insertCell().textContent = llamarObjetos.titulo
        fila.insertCell().src = llamarObjetos.foto
        fila.insertCell().textContent = llamarObjetos.idioma
        fila.insertCell().textContent = llamarObjetos.isbn
        fila.insertCell().textContent = llamarObjetos.formato
        fila.insertCell().textContent = llamarObjetos.autor
        fila.insertCell().textContent = llamarObjetos.precio


    })


}

inicializar()