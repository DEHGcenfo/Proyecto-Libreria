const parametros = new URLSearchParams(window.location.search);
const isbn = parametros.get('isbn');
let libroEncontrado;
listaLibros = await obtenerDatos('listar-libros');

for (const libro in listaLibros) {

    if (libro.isbn == isbn) {
        libroEncontrado = libro;
        break;
    }

}