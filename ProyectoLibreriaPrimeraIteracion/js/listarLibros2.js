const seccionCartas = document.querySelector('#sct-contenedor-cartas')
const inputFiltro = document.getElementById('txt-filtro')
const confirmar = document.getElementById('btnConfirmar')



let listaLibros = []


const inicializar = async() => {
    listaLibros = await obtenerDatos('listar-libros')
    mostrarDatos()
}

let librosSelect = []

confirmar.addEventListener('click', () => {
    enviar(librosSelect)
        //window.location.href = 'carritoDeCompras.html'
})

const mostrarDatos = () => {
    seccionCartas.innerHTML = ''
    listaLibros.forEach(llamarObjetos => {
        if (llamarObjetos.titulo.toLowerCase().includes(inputFiltro.value.toLowerCase()) || llamarObjetos.autor.toLowerCase().includes(inputFiltro.value.toLowerCase())) {

            let carta = document.createElement('div')
            carta.classList.add('carta')

            let titulo = document.createElement('a')
            titulo.classList.add('titulo')
            titulo.textContent = llamarObjetos.titulo

            let foto = document.createElement('img')
            foto.classList.add('fotoLibro')
            foto.src = llamarObjetos.foto



            let isbn = document.createElement('p')
            isbn.classList.add('isbn')
            isbn.textContent = `ISBN: ${llamarObjetos.isbn}`


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
            btnComprar.addEventListener('click', () => {
                librosSelect.push(llamarObjetos)
            })


            //btnComprar.addEventListener('click', agregaCompra)




            carta.appendChild(titulo)
            carta.appendChild(foto)
            carta.appendChild(isbn)
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