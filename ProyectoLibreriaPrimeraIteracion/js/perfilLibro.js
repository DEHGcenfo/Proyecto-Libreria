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


    let divIzquierdo = document.createElement('div')
    divIzquierdo.classList.add('divIzquierdo')

    let divDerecho = document.createElement('div')
    divDerecho.classList.add('divDerecho')

    let titulo = document.createElement('a')
    titulo.classList.add('titulo')
    titulo.textContent = libroEncontrado.titulo

    let foto = document.createElement('img')
    foto.classList.add('fotoLibro')
    foto.src = libroEncontrado.foto



    let isbn = document.createElement('p')
    isbn.classList.add('isbn')
    isbn.textContent = `ISBN: ${libroEncontrado.isbn}`


    let formato = document.createElement('p')
    formato.classList.add('formato')
    formato.textContent = libroEncontrado.formato

    let autor = document.createElement('p')
    autor.classList.add('autor')
    autor.textContent = libroEncontrado.autor

    let precio = document.createElement('p')
    precio.classList.add('precio')
    precio.textContent = libroEncontrado.precio


    carta.appendChild(titulo)
    carta.appendChild(foto)
    carta.appendChild(contInfo)
    divIzquierdo.appendChild(autor)
    divIzquierdo.appendChild(isbn)
    divIzquierdo.appendChild(formato)
    divDerecho.appendChild(precio)
    contInfo.appendChild(divIzquierdo)
    contInfo.appendChild(divDerecho)
    seccionCartas.appendChild(carta)




};
inicializar();