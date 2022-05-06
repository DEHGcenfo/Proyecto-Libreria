const seccionAutores = document.querySelector('#seccionAutores')
let listaAutores = []
const inputFiltro = document.getElementById('busacarAutor')
const inicializar = async() => {
    listaAutores = await obtenerDatos('listar-autores')
    mostrarDatos()
}
const mostrarDatos = () => {
    seccionAutores.innerHTML = ''
    listaAutores.forEach(llamarObjetos => {
        if (llamarObjetos.nombre.toLowerCase().includes(inputFiltro.value.toLowerCase())) {
            let carta = document.createElement('div')
            carta.classList.add('carta')

            let tituloAutor = document.createElement('h2')
            tituloAutor.classList.add('nombreAutor')
            tituloAutor.textContent = llamarObjetos.nombre

            let foto = document.createElement('img')
            foto.classList.add('fotoAutor')
            foto.src = llamarObjetos.fotoAutor

            let premiosGanados = document.createElement('h2')
            premiosGanados.textContent = `Premios ganados: ${llamarObjetos.premios}`

            let resennaAutor = document.createElement('p')
            resennaAutor.textContent = `Reseña: ${llamarObjetos.resena}`

            let detallesAutor = document.createElement('p')
            detallesAutor.textContent = `Detalles: ${llamarObjetos.detalles}`

            carta.appendChild(tituloAutor)
            carta.appendChild(foto)
            carta.appendChild(premiosGanados)
            carta.appendChild(resennaAutor)
            carta.appendChild(detallesAutor)
            seccionAutores.appendChild(carta)

        }

    })



}

inicializar()

inputFiltro.addEventListener('keyup', () => {
    mostrarDatos()
})