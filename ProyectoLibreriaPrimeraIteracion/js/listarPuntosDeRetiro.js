const seccionCartas = document.querySelector('#sct-cont-cartas')
const inputFiltro = document.getElementById('txt-filtro')


let listaPuntosDeRetiro = []


const inicializar = async() => {
    listaPuntosDeRetiro = await obtenerDatos('listar-puntosDeRetiro')
    mostrarDatos()
}
const mostrarDatos = () => {
    seccionCartas.innerHTML = ''
    listaPuntosDeRetiro.forEach(llamarObjetos => {
        if (llamarObjetos.nombre.toLowerCase().includes(inputFiltro.value.toLowerCase()) || llamarObjetos.correo.toLowerCase().includes(inputFiltro.value.toLowerCase())) {


            let carta = document.createElement('div')
            carta.classList.add('carta')



            let nombre = document.createElement('h1')
            nombre.classList.add('nombre')
            nombre.textContent = llamarObjetos.nombre

            let provincia = document.createElement('p')
            provincia.textContent = llamarObjetos.provincia

            let direccionExacta = document.createElement('p')
            direccionExacta.textContent = llamarObjetos.direccionExacta

            let ubicacionMapa = document.createElement('p')
            ubicacionMapa.textContent = llamarObjetos.ubicacionMapa

            let telefono = document.createElement('p')
            telefono.textContent = llamarObjetos.telefono

            let correo = document.createElement('p')
            correo.textContent = llamarObjetos.correo

            carta.appendChild(nombre)
            carta.appendChild(provincia)
            carta.appendChild(direccionExacta)
            carta.appendChild(ubicacionMapa)
            carta.appendChild(telefono)
            carta.appendChild(correo)
            seccionCartas.appendChild(carta)


        }

    });
};
inicializar();
inputFiltro.addEventListener("keyup", () => {

    mostrarDatos();
});