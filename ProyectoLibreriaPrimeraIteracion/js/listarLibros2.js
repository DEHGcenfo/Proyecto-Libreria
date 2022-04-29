const seccionCartas = document.querySelector('#sct-contenedor-cartas')
const inputFiltro = document.getElementById('txt-filtro')


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

            let resenna = document.createElement('p')
            resenna.textContent = llamarObjetos.resenna

            let isbn = document.createElement('p')
            isbn.textContent = llamarObjetos.isbn

            let fechaPublicacion = document.createElement('p')
            fechaPublicacion.textContent = llamarObjetos.fechaPublicacion

            let editorial = document.createElement('p')
            editorial.textContent = llamarObjetos.editorial

            let premios = document.createElement('p')
            premios.textContent = llamarObjetos.premios

            let idioma = document.createElement('p')
            idioma.textContent = llamarObjetos.idioma

            let generosLiterarios = document.createElement('p')
            generosLiterarios.textContent = llamarObjetos.generosLiterarios

            let formato = document.createElement('p')
            formato.textContent = llamarObjetos.formato

            let autor = document.createElement('p')
            autor.textContent = llamarObjetos.autor

            let precio = document.createElement('p')
            precio.textContent = llamarObjetos.precio

            carta.appendChild(titulo)
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
            seccionCartas.appendChild(carta)


        }

    });
};
inicializar();
inputFiltro.addEventListener("keyup", () => {

    mostrarDatos();
});