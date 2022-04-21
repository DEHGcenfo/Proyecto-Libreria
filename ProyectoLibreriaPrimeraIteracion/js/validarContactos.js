const botonEnviar = document.getElementById('btnEnviar')
const inputNombre = document.getElementById('txtNombre')
const inputCorreo = document.getElementById('txtCorreo')
const inputMensaje = document.getElementById('txtMensaje')




const mensaje = () => {
    let inputNombres = inputNombre.value
    let inputCorreos = inputCorreo.value
    let inputMensajes = inputMensaje.value

    console.log("Nombre del cliente: ", inputNombres)
    console.log("Correo del Cliente: ", inputCorreos)
    console.log("Mensaje del cliente: ", inputMensajes)

}





const validar = () => {
    let hayError = false;

    if (inputNombre.value == '') {
        hayError = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }
    if (inputCorreo.value == '') {
        hayError = true;
        inputCorreo.classList.add('input-error');
    } else {
        inputCorreo.classList.remove('input-error');
    }
    if (inputMensaje.value == '') {
        hayError = true;
        inputMensaje.classList.add('input-error');
    } else {
        inputMensaje.classList.remove('input-error');
    }


    if (hayError == true) {
        mensaje()
        Swal.fire({

            'icon': 'warning',
            'title': 'No se ha podido enviar el mensaje',
            'text': 'Por favor rellene los campos resaltados'
        });
        console.log("Rellene los campos vacios")
    } else {
        mensaje()
        Swal.fire({
            'icon': 'success',
            'title': 'Enviado Exitosamente',
            'text': 'Por favor esperar respuesta por medio del correo'
        });
    }
}

botonEnviar.addEventListener("click", validar)