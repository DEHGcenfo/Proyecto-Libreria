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

    let contInfo = document.createElement('section')
    contInfo.classList.add('contInfo')


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


    /*let formato = document.createElement('p')
    formato.classList.add('formato')
    formato.textContent = usuarioEncontrado.formato

    let autor = document.createElement('p')
    autor.classList.add('autor')
    autor.textContent = usuarioEncontrado.autor

    let precio = document.createElement('p')
    precio.classList.add('precio')
    precio.textContent = usuarioEncontrado.precio
*/

    carta.appendChild(nombre)
    carta.appendChild(fotoUsuario)
    carta.appendChild(contInfo)
    divIzquierdo.appendChild(genero)
    divIzquierdo.appendChild(identificacion)
        /*divIzquierdo.appendChild(formato)
        divDerecho.appendChild(precio)*/
    contInfo.appendChild(divIzquierdo)
    contInfo.appendChild(divDerecho)
    seccionCartas.appendChild(carta)




};
inicializar();