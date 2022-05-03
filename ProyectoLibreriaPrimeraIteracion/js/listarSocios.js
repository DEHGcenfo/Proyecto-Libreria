const seccionCartas = document.querySelector('#sct-contenedor-cartas')
const inputFiltro = document.getElementById('busacarSocio')

let listaSocios = []


const inicializar = async() => {
    listaSocios = await obtenerDatos('listar-sociosComerciales')
    mostrarDatos()
}


const mostrarDatos = () => {
    seccionCartas.innerHTML = ''
    listaSocios.forEach(llamarObjetos => {
        if (llamarObjetos.nombreSocio.toLowerCase().includes(inputFiltro.value.toLowerCase()) || llamarObjetos.ubicacionSocio.toLowerCase().includes(inputFiltro.value.toLowerCase())) {

            let carta = document.createElement('div')
            carta.classList.add('carta')

            let fotoSocio = document.createElement('img')
            fotoSocio.classList.add('fotoSocio')
            fotoSocio.textContent = llamarObjetos.fotoSocio

            let nombreSocio = document.createElement('p')
            nombreSocio.classList.add('nombreSocio')
            nombreSocio.innerText = `Nombre del Socio Comercial: ${nombreSocio.value = llamarObjetos.nombreSocio}`


            let ubicacionSocio = document.createElement('p')
            ubicacionSocio.innerText = `Ubicación: ${ubicacionSocio.textContent = llamarObjetos.ubicacionSocio}`



            let telefonoSocio = document.createElement('p')
            telefonoSocio.classList.add('telefonoSocio')
            telefonoSocio.innerText = `Telefono: ${telefonoSocio.textContent = llamarObjetos.telefonoSocio}`


            carta.appendChild(fotoSocio)
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