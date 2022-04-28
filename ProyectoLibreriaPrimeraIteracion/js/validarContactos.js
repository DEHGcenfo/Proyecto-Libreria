const botonEnviar = document.getElementById('btnEnviar')
const inputNombre = document.getElementById('txtNombre')
const inputCorreo = document.getElementById('txtCorreo')
const inputMensaje = document.getElementById('txtMensaje')




const registrarMensaje = () => {
    let data = {
        nombre: inputNombre.value,
        correo: inputCorreo.value,
        mensaje: inputMensaje.value

    }
    registrarDatos("registrar-mensaje", data)

};

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
        Swal.fire({

            'icon': 'warning',
            'title': 'No se ha podido enviar el mensaje',
            'text': 'Por favor rellene los campos resaltados'
        });
        console.log("Rellene los campos vacios")
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Enviado Exitosamente',
            'text': 'Por favor esperar respuesta por medio del correo'
        })
        registrarMensaje();
    }
};

botonEnviar.addEventListener("click", validar)