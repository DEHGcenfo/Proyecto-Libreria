const seccionCartas = document.querySelector('#sct-contenedor-cartas')
const inputCVV = document.getElementById('codigoCVV')
const btnConfirmar = document.getElementById('confirmarCompra')
let listaPago = []
const inicializar = () => {

    let data = {
        correo: JSON.parse(localStorage.getItem('usuarioConectado')).correo,
        nombreTarjeta: JSON.parse(localStorage.getItem('tarjetaSelec')).nombreTarjeta,
        numeroTarjeta: JSON.parse(localStorage.getItem('tarjetaSelec')).numeroTarjeta,
        fechaExpiracion: JSON.parse(localStorage.getItem('tarjetaSelec')).fechaExpiracion,
        nombreUsuario: JSON.parse(localStorage.getItem('tarjetaSelec')).nombreUsuario,
        direccionUsuario: JSON.parse(localStorage.getItem('tarjetaSelec')).direccionUsuario,
        codigoCVV: JSON.parse(localStorage.getItem('tarjetaSelec')).codigoCVV,
    }
    listaPago.push(data)
    console.log(listaPago)

    mostrarDatos()
}



const mostrarDatos = () => {
    seccionCartas.innerHTML = ''


    listaPago.forEach(llamarObjetos => {


        let carta = document.createElement('div')
        carta.classList.add('carta')

        let contInfo = document.createElement('section')
        contInfo.classList.add('contInfo')

        let divIzquierdo = document.createElement('div')
        divIzquierdo.classList.add('divIzquierdo')

        let divDerecho = document.createElement('div')
        divDerecho.classList.add('divDerecho')

        let nombre = document.createElement('label')
        nombre.classList.add('nombreTarjeta')
        nombre.textContent = `Nombre de la tarjeta ${llamarObjetos.nombreTarjeta}`

        let numero = document.createElement('label')
        numero.classList.add('numeroTarjeta')
        numero.innerHTML = `Numero de la tarjeta ${llamarObjetos.numeroTarjeta}`

        let fecha = document.createElement('p')
        fecha.classList.add('fechaExpiracion')
        fecha.textContent = `Fecha de expiracion ${llamarObjetos.fechaExpiracion}`


        let nombreUsuario = document.createElement('p')
        nombreUsuario.classList.add('nombreUsuario')
        nombreUsuario.textContent = `Nombre del usuario ${llamarObjetos.nombreUsuario}`

        let direccion = document.createElement('p')
        direccion.classList.add('direccion')
        direccion.textContent = `Dirección del usuario ${llamarObjetos.direccionUsuario}`


        const alerta = () => {

            if (inputCVV.value == llamarObjetos.codigoCVV) {
                Swal.fire({
                    "icon": "success",
                    "title": "Confirmar la compra exitosa!",

                })

            } else {
                Swal.fire({
                    'icon': 'error',
                    'title': 'No se pudo confirmar la compra',
                    'text': 'Codigo CVV incorrecto'
                })
            }
        }

        btnConfirmar.addEventListener('click', alerta)












        carta.appendChild(nombre)
        carta.appendChild(numero)
        carta.appendChild(contInfo)
        divIzquierdo.appendChild(fecha)
        divIzquierdo.appendChild(nombreUsuario)
        divIzquierdo.appendChild(direccion)


        contInfo.appendChild(divIzquierdo)
        contInfo.appendChild(divDerecho)
        seccionCartas.appendChild(carta)




    });
};

inicializar()