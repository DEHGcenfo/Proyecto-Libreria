const botonFactura = document.getElementsByClassName("tenth-btn");
const validar = () => {

    Swal.fire({
        'icon': 'success',
        'text': 'Factura enviada existosamente'
    })

}
for (let i = 0; i < botonFactura.length; i++) {
    botonFactura[i].addEventListener('click', validar, false);
}