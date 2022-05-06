const seccionCartas = document.querySelector('#sct-cont-cartas')
const inputFiltro = document.getElementById('txt-filtro')


let listaSociosComerciales = []


const inicializar = async() => {
    listaSociosComerciales = await obtenerDatos('listar-sociosComerciales')
    mostrarDatos()
}
const mostrarDatos = () => {
    seccionCartas.innerHTML = ''
    listaSociosComerciales.forEach(llamarObjetos => {
        if (llamarObjetos.nombreSocio.toLowerCase().includes(inputFiltro.value.toLowerCase())) {


            let carta = document.createElement('div')
            carta.classList.add('carta')



            let nombreSocio = document.createElement('h1')
            nombreSocio.classList.add('nombre')
            nombreSocio.textContent = llamarObjetos.nombreSocio

            let ubicacionSocio = document.createElement('p')
            ubicacionSocio.textContent = llamarObjetos.ubicacionSocio

            let telefonoSocio = document.createElement('p')
            telefonoSocio.textContent = llamarObjetos.telefonoSocio



            carta.appendChild(nombreSocio)
            carta.appendChild(ubicacionSocio)
            carta.appendChild(telefonoSocio)

            seccionCartas.appendChild(carta)


        }

    });
};
inicializar();
inputFiltro.addEventListener("keyup", () => {

    mostrarDatos();
});