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

            let foto = document.createElement('img')
            foto.classList.add('foto')
            foto.src = llamarObjetos.fotoUsuario

            let nombre = document.createElement('h2')
            nombre.classList.add('nombre')
            nombre.textContent = `Nombre del Usuario: ${llamarObjetos.nombre}`

            let correo = document.createElement('p')
            correo.classList.add('correo')
            correo.textContent = `Correo Electrónico: ${llamarObjetos.correo}`

            let genero = document.createElement('p')
            let tipo = ""
            if (llamarObjetos.genero == 1) {
                tipo = "Masculino"
            } else if (llamarObjetos.genero == 2) {
                tipo = "Femenino"
            } else {
                tipo = "Otro"
            }
            genero.textContent = `Género: ${tipo}`

            let identificacion = document.createElement('p')
            identificacion.textContent = `Identificación ${llamarObjetos.identificacion}`

            let provincia = document.createElement('p')
            let tipoProv = ""
            if (llamarObjetos.provincia == 1) {
                tipoProv = "Limón"
            } else if (llamarObjetos.provincia == 2) {
                tipoProv = "Puntarenas"
            } else if (llamarObjetos.provincia == 3) {
                tipoProv = "Guanacaste"
            } else if (llamarObjetos.provincia == 4) {
                tipoProv = "Heredia"
            } else if (llamarObjetos.provincia == 5) {
                tipoProv = "Cartago"
            } else if (llamarObjetos.provincia == 6) {
                tipoProv = "Alajuela"
            } else if (llamarObjetos.provincia == 7) {
                tipoProv = "San José"
            }
            provincia.textContent = `Provincia: ${tipoProv}`

            let canton = document.createElement('p')
            canton.textContent = `Cantón: ${llamarObjetos.canton}`

            let distrito = document.createElement('p')
            distrito.textContent = `Distrito: ${llamarObjetos.distrito}`

            let direccionExacta = document.createElement('p')
            direccionExacta.textContent = `Dirección: ${llamarObjetos.direccionExacta}`



            carta.appendChild(foto)
            carta.appendChild(nombre)
            carta.appendChild(correo)
            carta.appendChild(genero)
            carta.appendChild(identificacion)
            carta.appendChild(provincia)
            carta.appendChild(canton)
            carta.appendChild(distrito)
            carta.appendChild(direccionExacta)

            seccionCartas.appendChild(carta)


        }

    });
};
inicializar();
inputFiltro.addEventListener("keyup", () => {

    mostrarDatos();
});