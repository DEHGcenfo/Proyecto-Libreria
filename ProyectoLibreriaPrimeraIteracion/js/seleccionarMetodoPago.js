const botonSeleccionarMetodoPago = document.getElementsByClassName('btnSelect')

const validarMetodoPago = () => {
    Swal.fire({
        title: '¿Desea utilizar este método de pago?',
        showDenyButton: true,

        confirmButtonText: 'Continuar',

    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire('¡Método de pago seleccionado!')
        }
    })
}
for (let i = 0; i < botonSeleccionarMetodoPago.length; i++) {
    botonSeleccionarMetodoPago[i].addEventListener('click', validarMetodoPago, false);
}