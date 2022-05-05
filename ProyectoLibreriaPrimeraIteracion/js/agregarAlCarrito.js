let correoUsuario = JSON.parse(localStorage.getItem('usuarioConectado')).correo



const enviar = (librosSelect) => {

    //localStorage.setItem('libroAgregado', JSON.stringify(Aux));

    agregarLibro(librosSelect)
}







const agregarLibro = (librosSelect) => {

    /*let isbn = JSON.parse(localStorage.getItem('libroAgregado')).isbn
    let titulo = JSON.parse(localStorage.getItem('libroAgregado')).titulo
    let foto = JSON.parse(localStorage.getItem('libroAgregado')).foto
    let formato = JSON.parse(localStorage.getItem('libroAgregado')).formato
    let autor = JSON.parse(localStorage.getItem('libroAgregado')).autor
    let precio = JSON.parse(localStorage.getItem('libroAgregado')).precio*/
    librosSelect.forEach(libro => {
        let data = {
            correo: correoUsuario,
            isbn: libro.isbn,
            titulo: libro.titulo,
            foto: libro.foto,
            formato: libro.formato,
            autor: libro.autor,
            precio: libro.precio
        }

        registrarDatos('registrar-compra', data)
    });


}