const botonContinuar = document.getElementById('test-button-continuar');
const correo = document.getElementById('email');

const validarCorreo = () => {
    // simple regular expression to test for a valid email
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(correo.value)) {
        Swal.fire({
            "icon": "success",
            "title": "Se le ha enviado un correo para reestablecer su contrasena",
          })
    } else {
        Swal.fire({
            "icon": "warning",
            "title": "Algo salió mal",
            "text": "Favor ingrese un correo valido"
          })
    }
}


botonContinuar.addEventListener('click', validarCorreo);
