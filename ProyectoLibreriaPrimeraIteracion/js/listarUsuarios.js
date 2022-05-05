const seccionCartas = document.querySelector('#sct-cont-cartas')
const inputFiltro = document.getElementById('txt-filtro')


let listaUsuarios = []


const inicializar = async() => {
    listaUsuarios = await obtenerDatos('listar-usuarios')
    mostrarDatos()
}
const mostrarDatos = () => {
    seccionCartas.innerHTML = ''
    listaUsuarios.forEach(llamarObjetos => {
        if (llamarObjetos.identificacion || llamarObjetos.nombre.toLowerCase().includes(inputFiltro.value.toLowerCase())) {


            let carta = document.createElement('div')
            carta.classList.add('carta')

            let nombre = document.createElement('h2')
            nombre.classList.add('nombre')
            nombre.textContent = llamarObjetos.correo

            let genero = document.createElement('p')
            genero.textContent = llamarObjetos.genero

            let identificacion = document.createElement('p')
            identificacion.textContent = llamarObjetos.identificacion

            let provincia = document.createElement('p')
            provincia.textContent = llamarObjetos.provincia

            let canton = document.createElement('p')
            canton.textContent = llamarObjetos.canton

            let distrito = document.createElement('p')
            distrito.textContent = llamarObjetos.distrito

            let direccionExacta = document.createElement('p')
            direccionExacta.textContent = llamarObjetos.direccionExacta

            let estado = document.createElement('p')
            estado.textContent = llamarObjetos.estado

            carta.appendChild(nombre)
            carta.appendChild(genero)
            carta.appendChild(identificacion)
            carta.appendChild(provincia)
            carta.appendChild(canton)
            carta.appendChild(distrito)
            carta.appendChild(direccionExacta)
            carta.appendChild(estado)
            seccionCartas.appendChild(carta)


        }

    });
};
inicializar();
inputFiltro.addEventListener("keyup", () => {

    mostrarDatos();
});