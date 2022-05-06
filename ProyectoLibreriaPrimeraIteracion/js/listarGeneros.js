const seccionCartas = document.querySelector('#sct-cont-cartas')
const inputFiltro = document.getElementById('txt-filtro')


let listaGeneros = []


const inicializar = async() => {
    listaGeneros = await obtenerDatos('listar-genero')
    mostrarDatos()
}
const mostrarDatos = () => {
    seccionCartas.innerHTML = ''
    listaGeneros.forEach(llamarObjetos => {
        if (llamarObjetos.nombreGenero.toLowerCase().includes(inputFiltro.value.toLowerCase())) {


            let carta = document.createElement('div')
            carta.classList.add('carta')



            let nombreGenero = document.createElement('h1')
            nombreGenero.classList.add('nombre')
            nombreGenero.textContent = llamarObjetos.nombreGenero

            let IdGenero = document.createElement('h4')
            IdGenero.classList.add('ID')
            IdGenero.textContent = `ID del Género literario: ${llamarObjetos.IdGenero}`


            carta.appendChild(IdGenero)
            carta.appendChild(nombreGenero)
            seccionCartas.appendChild(carta)



        }

    });
};
inicializar();
inputFiltro.addEventListener("keyup", () => {

    mostrarDatos();
});