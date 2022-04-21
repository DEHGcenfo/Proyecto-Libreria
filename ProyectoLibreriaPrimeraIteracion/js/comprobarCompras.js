const botonPuntosLF = document.getElementById('botonPuntosLF')
const botonComprar = document.getElementById('botonComprar')
const botonCancelar = document.getElementById('botonCancelar')
const codigoCVV = document.getElementById('codigoCVV')

const mensaje = () => {
    let confirmarCompra = codigoCVV.value

    console.log("El codigo CVV es: ", confirmarCompra)


}


const validar = () => {
    let hayError = false
    if (codigoCVV.value == '' || codigoCVV.value.length != 3) {
        hayError = true;
        codigoCVV.classList.add('input-error')
    } else {
        codigoCVV.classList.remove('input-error')
    }

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Error al ingresar el código',
            'text': 'Por favor introduzcalo nuevamente'
        })
        console.log("Introduzca el código CVV")
    } else {
        mensaje()
        Swal.fire({
            'icon': 'success',
            'title': 'Compra exitosa',
            'text': 'Por favor revisar la factura en el correo electrónico'
        });
    }
}

const validarPuntos = () => {
    Swal.fire({
        title: '¿Desea pagar con sus puntos Libro Fan?',
        showDenyButton: true,

        confirmButtonText: 'Continuar',

    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire('¡Compra exitosa!')
        }
    })
}


botonComprar.addEventListener("click", validar)
botonPuntosLF.addEventListener("click", validarPuntos)