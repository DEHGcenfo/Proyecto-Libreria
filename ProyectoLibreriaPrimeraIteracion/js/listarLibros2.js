const seccionCartas = document.querySelector('#sct-contenedor-cartas')
const inputFiltro = document.getElementById('txt-filtro')
    /*const tituloLibro = document.getElementsByClassName('titulo')
    const isbnLibro = document.getElementsByClassName('isbn')
    const idiomaLibro = document.getElementsByClassName('idioma')
    const formatoLibro = document.getElementsByClassName('formato')
    const autorLibro = document.getElementsByClassName('autor')
    const precioLibro = document.getElementsByClassName('precio')
    const btnComprar = document.getElementsByClassName('btnComprar')*/




let listaLibros = []


const inicializar = async() => {
    listaLibros = await obtenerDatos('listar-libros')
    mostrarDatos()
}


const mostrarDatos = () => {
    seccionCartas.innerHTML = ''
    listaLibros.forEach(llamarObjetos => {
        if (llamarObjetos.titulo.toLowerCase().includes(inputFiltro.value.toLowerCase()) || llamarObjetos.autor.toLowerCase().includes(inputFiltro.value.toLowerCase())) {

            let carta = document.createElement('div')
            carta.classList.add('carta')

            let titulo = document.createElement('h2')
            titulo.classList.add('titulo')
            titulo.textContent = llamarObjetos.titulo

            let foto = document.createElement('img')
            foto.classList.add('fotoLibro')
            foto.src = llamarObjetos.foto

            let resenna = document.createElement('p')
            resenna.textContent = llamarObjetos.resenna

            let isbn = document.createElement('p')
            isbn.classList.add('isbn')
            isbn.textContent = llamarObjetos.isbn

            let fechaPublicacion = document.createElement('p')
            fechaPublicacion.textContent = llamarObjetos.fechaPublicacion

            let editorial = document.createElement('p')
            editorial.textContent = llamarObjetos.editorial

            let premios = document.createElement('p')
            premios.textContent = llamarObjetos.premios

            let idioma = document.createElement('p')
            idioma.classList.add('idioma')
            idioma.textContent = llamarObjetos.idioma

            let generosLiterarios = document.createElement('p')
            generosLiterarios.textContent = llamarObjetos.generosLiterarios

            let formato = document.createElement('p')
            formato.classList.add('formato')
            formato.textContent = llamarObjetos.formato

            let autor = document.createElement('p')
            autor.classList.add('autor')
            autor.textContent = llamarObjetos.autor

            let precio = document.createElement('p')
            precio.classList.add('precio')
            precio.textContent = llamarObjetos.precio



            let btnComprar = document.createElement('button')
            btnComprar.classList.add('btnComprar')
            btnComprar.innerHTML = 'Agregar al carrito'
                //btnComprar.addEventListener('click', agregaCompra)




            carta.appendChild(titulo)
            carta.appendChild(foto)
            carta.appendChild(resenna)
            carta.appendChild(isbn)
            carta.appendChild(fechaPublicacion)
            carta.appendChild(editorial)
            carta.appendChild(premios)
            carta.appendChild(idioma)
            carta.appendChild(generosLiterarios)
            carta.appendChild(formato)
            carta.appendChild(autor)
            carta.appendChild(precio)
            carta.appendChild(btnComprar)
            seccionCartas.appendChild(carta)


        }

    });
};

/*const registrarCompra = () => {

    let data = {

        titulo: tituloLibro.value,

        isbn: isbnLibro.value,

        idioma: idiomaLibro.value,

        formato: formatoLibro.value,
        autor: autorLibro.value,
        precio: precioLibro.value
    }
    registrarDatos("registrar-compra", data)
};
const agregaCompra = () => {
    for (let i = 0; i < btnComprar.length; i++) {
        btnComprar[i].addEventListener('click', registrarCompra, false);
    }
}*/
inicializar();
inputFiltro.addEventListener("keyup", () => {

    mostrarDatos();
});