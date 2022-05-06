const seccionCartas = document.querySelector('#sct-contenedor-cartas')
const inputFiltro = document.getElementById('txt-filtro')
const confirmar = document.getElementById('btnConfirmar')
const identificacion = JSON.parse(localStorage.getItem('usuarioConectado')).identificacion;
let usuarioEncontrado;

const inicializar = async() => {
    let listaUsuarios = await obtenerDatos('listar-usuarios')
    console.log(identificacion);
    for (const usuario in listaUsuarios) {
        console.log(listaUsuarios[usuario]);
        if (listaUsuarios[usuario].identificacion == identificacion) {
            console.log("usuario encontrado")
            usuarioEncontrado = listaUsuarios[usuario];
            mostrarDatos(usuarioEncontrado);
            break;
        }
    }
}

const mostrarDatos = (usuarioEncontrado) => {
    seccionCartas.innerHTML = ''

    let carta = document.createElement('div')
    carta.classList.add('carta')

    let divIzquierdo = document.createElement('div')
    divIzquierdo.classList.add('divIzquierdo')

    let divDerecho = document.createElement('div')
    divDerecho.classList.add('divDerecho')

    let nombre = document.createElement('h1')
    nombre.classList.add('nombre')
    nombre.textContent = usuarioEncontrado.nombre

    let fotoUsuario = document.createElement('img')
    fotoUsuario.classList.add('fotoUsuario')
    fotoUsuario.src = usuarioEncontrado.fotoUsuario

    let identificacion = document.createElement('p')
    identificacion.classList.add('identificacion')
    identificacion.textContent = `Identificacion: ${usuarioEncontrado.identificacion}`

    let genero = document.createElement('p')
    genero.classList.add('genero')
    genero.textContent = `Genero: ${usuarioEncontrado.genero}`

    let provincia = document.createElement('p')
    provincia.classList.add('provincia')
    provincia.textContent = `Provincia: ${usuarioEncontrado.provincia}`

    let canton = document.createElement('p')
    canton.classList.add('canton')
    canton.textContent = `Canton: ${usuarioEncontrado.canton}`

    let distrito = document.createElement('p')
    distrito.classList.add('distrito')
    distrito.textContent = `Distrito: ${usuarioEncontrado.distrito}`


    let direccionExacta = document.createElement('p')
    direccionExacta.classList.add('direccionExacta')
    direccionExacta.textContent = `Dirección exacta: ${usuarioEncontrado.direccionExacta}`

    let correo = document.createElement('p')
    correo.classList.add('correo')
    correo.textContent = usuarioEncontrado.correo



    divIzquierdo.appendChild(identificacion)
    divIzquierdo.appendChild(provincia)
    divIzquierdo.appendChild(canton)
    divIzquierdo.appendChild(distrito)
    divIzquierdo.appendChild(direccionExacta)
    divDerecho.appendChild(fotoUsuario)
    divDerecho.appendChild(nombre)
    divDerecho.appendChild(correo)

    //divDerecho.appendChild(genero)
    /*divIzquierdo.appendChild(formato)
    divDerecho.appendChild(precio)*/
    carta.appendChild(divIzquierdo)
    carta.appendChild(divDerecho)
    seccionCartas.appendChild(carta)




};
inicializar();