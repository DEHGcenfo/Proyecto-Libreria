const seccionCartas = document.querySelector('#sct-cont-cartas')
const inputFiltro = document.getElementById('txt-filtro')


let listaSociosComerciales = []


const inicializar = async() => {
    listaSociosComerciales = await obtenerDatos('listar-sociosComerciales')
    mostrarDatos()
}
const mostrarDatos = () => {
    seccionCartas.innerHTML = ''
    listaPuntosDeRetiro.forEach(llamarObjetos => {
        if (llamarObjetos.nombre.toLowerCase().includes(inputFiltro.value.toLowerCase()) || llamarObjetos.correo.toLowerCase().includes(inputFiltro.value.toLowerCase())) {


            let carta = document.createElement('div')
            carta.classList.add('carta')



            let nombreSocio = document.createElement('h1')
            nombreSocio.classList.add('nombre')
            nombreSocio.textContent = llamarObjetos.nombre

            let ubicacionSocio = document.createElement('p')
            ubicacionSocio.textContent = llamarObjetos.ubicacionSocio

            let telefonoSocio = document.createElement('p')
            telefonoSocio.textContent = llamarObjetos.telefonoSocio


            carta.appendChild(nombreSocio)
            carta.appendChild(ubicacionSocio)
            carta.appendChild(telefonoSocio)




        }

    });
};
inicializar();
inputFiltro.addEventListener("keyup", () => {

    mostrarDatos();
});