let correoUsuario = JSON.parse(localStorage.getItem('usuarioConectado')).correo



const enviar = () => {
    for (let i = 0; i < listaLibros.length; i++) {
        let coleccion = []
        coleccion[i] = listaLibros[i]
        coleccion.forEach(Aux => {

            localStorage.setItem('libroAgregado', JSON.stringify(Aux));

        });
    }
    /*for (let i = 0; i < listaLibros.length; i++) {
        let coleccion = listaLibros[i]
        coleccion.forEach(Aux => {

            localStorage.setItem('libroAgregado', JSON.stringify(Aux));

        });
    }*/
    agregarLibro()
}







const agregarLibro = () => {

    let isbn = JSON.parse(localStorage.getItem('libroAgregado')).isbn
    let titulo = JSON.parse(localStorage.getItem('libroAgregado')).titulo
    let foto = JSON.parse(localStorage.getItem('libroAgregado')).foto
    let formato = JSON.parse(localStorage.getItem('libroAgregado')).formato
    let autor = JSON.parse(localStorage.getItem('libroAgregado')).autor
    let precio = JSON.parse(localStorage.getItem('libroAgregado')).precio
    let data = {
        correo: correoUsuario,
        isbn: isbn,
        titulo: titulo,
        foto: foto,
        formato: formato,
        autor: autor,
        precio: precio
    }

    registrarDatos('registrar-compra', data)
}