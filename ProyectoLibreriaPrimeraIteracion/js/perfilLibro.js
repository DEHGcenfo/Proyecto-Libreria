const seccionCartas = document.querySelector('#sct-contenedor-cartas')
const inputFiltro = document.getElementById('txt-filtro')
const confirmar = document.getElementById('btnConfirmar')
const parametros = new URLSearchParams(window.location.search);
const isbn = parametros.get('isbn');
let libroEncontrado;

const inicializar = async() => {
    let listaLibros = await obtenerDatos('listar-libros')
    console.log(isbn);
    for (const libro in listaLibros) {
        console.log(listaLibros[libro]);
        if (listaLibros[libro].isbn == isbn) {
            console.log("Libro encontrado")
            libroEncontrado = listaLibros[libro];
            mostrarDatos(libroEncontrado);
            break;
        }
    }
}

const mostrarDatos = (libroEncontrado) => {
    seccionCartas.innerHTML = ''


    let carta = document.createElement('div')
    carta.classList.add('carta')


    let contInfo = document.createElement('section')
    contInfo.classList.add('contInfo')

    let contTitulo = document.createElement('section')
    contTitulo.classList.add('contTitulo')

    let divIzquierdo = document.createElement('div')
    divIzquierdo.classList.add('divIzquierdo')

    let divDerecho = document.createElement('div')
    divDerecho.classList.add('divDerecho')

    let foto = document.createElement('img')
    foto.classList.add('fotoLibro')
    foto.src = libroEncontrado.foto

    let titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = libroEncontrado.titulo

    let resenna = document.createElement('p')
    resenna.classList.add('resenna')
    resenna.textContent = `Reseña del libro: ${libroEncontrado.resenna}`

    let isbn = document.createElement('p')
    isbn.classList.add('isbn')
    isbn.textContent = `ISBN: ${libroEncontrado.isbn}`

    let autor = document.createElement('p')
    autor.classList.add('autor')
    autor.textContent = libroEncontrado.autor

    let precio = document.createElement('p')
    precio.classList.add('precio')
    precio.textContent = `Precio: ${libroEncontrado.precio}`


    let formato = document.createElement('p')
    formato.classList.add('formato')
    formato.textContent = `Formato: ${libroEncontrado.formato}`

    let fechaPublicacion = document.createElement('p')
    fechaPublicacion.classList.add('fechaPublicacion')
    fechaPublicacion.textContent = `Fecha de Publicación: ${libroEncontrado.fechaPublicacion}`

    let editorial = document.createElement('p')
    editorial.classList.add('editorial')
    editorial.textContent = `Editorial: ${libroEncontrado.editorial}`

    let premios = document.createElement('p')
    premios.classList.add('premios')
    premios.textContent = `Premios: ${libroEncontrado.premios}`

    let idioma = document.createElement('p')
    idioma.classList.add('idioma')
    idioma.textContent = `Idioma: ${libroEncontrado.idioma}`

    let generosLiterarios = document.createElement('p')
    generosLiterarios.classList.add('generosLiterarios')
    generosLiterarios.textContent = `Generos literarios: ${libroEncontrado.generosLiterarios}`



    carta.appendChild(contTitulo)
    contTitulo.appendChild(titulo)
    contInfo.appendChild(divIzquierdo)
    contInfo.appendChild(divDerecho)
    divIzquierdo.appendChild(foto)
    divIzquierdo.appendChild(autor)
    divIzquierdo.appendChild(precio)
    divDerecho.appendChild(resenna)
    divDerecho.appendChild(isbn)
    divDerecho.appendChild(fechaPublicacion)
    divDerecho.appendChild(editorial)
    divDerecho.appendChild(premios)
    divDerecho.appendChild(idioma)
    divDerecho.appendChild(generosLiterarios)
    divDerecho.appendChild(formato)
    carta.appendChild(contInfo)
    seccionCartas.appendChild(carta)


};
inicializar();