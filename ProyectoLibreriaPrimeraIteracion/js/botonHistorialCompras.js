const botonReenviarFactura = document.getElementsByClassName('btnReenviarFactura')

const validarReenviarFactura = () => {
    Swal.fire({
        title: '¿Desea que se reenvíe la factura a su correo electrónico?',
        showDenyButton: true,

        confirmButtonText: 'Continuar',

    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire('¡Factura enviada!')
        }
    })
}
for (let i = 0; i < botonReenviarFactura.length; i++) {
    botonReenviarFactura[i].addEventListener('click', validarReenviarFactura, false);
}