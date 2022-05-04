const nombreTarjeta = document.getElementById('nombreTarjeta')
const numeroTarjeta = document.getElementById('numeroTarjeta')
const fechaExpiracion = document.getElementById('fechaExpiracion')
const nombreUsuario = document.getElementById('nombreUsuario')
const direccionUsuario = document.getElementById('direccion')
const codigoCVV = document.getElementById('codigoCVV')
const botonAgregar = document.getElementById('botonAgregar')


const registrarMetodoDePago = () => {
    let data = {
        nombreTarjeta: nombreTarjeta.value,
        correo: JSON.parse(localStorage.getItem('usuarioConectado')).correo,
        numeroTarjeta: numeroTarjeta.value,
        fechaExpiracion: fechaExpiracion.value,
        nombreUsuario: nombreUsuario.value,
        direccionUsuario: direccionUsuario.value,
        codigoCVV: codigoCVV.value,

    }
    registrarDatos("registrar-metodoDePago", data)
}

const validar = () => {

    let hayError = false

    if (nombreTarjeta.value == "") {
        hayError = true;
        nombreTarjeta.classList.add("inputError");
    } else {
        nombreTarjeta.classList.remove("inputError");
    }

    if (numeroTarjeta.value == "") {
        hayError = true;
        numeroTarjeta.classList.add("inputError");
    } else {
        numeroTarjeta.classList.remove("inputError");
    }

    if (fechaExpiracion.value == "") {
        hayError = true;
        fechaExpiracion.classList.add("inputError");
    } else {
        fechaExpiracion.classList.remove("inputError");
    }

    if (nombreUsuario.value == "") {
        hayError = true;
        nombreUsuario.classList.add("inputError");
    } else {
        nombreUsuario.classList.remove("inputError");
    }

    if (direccionUsuario.value == "") {
        hayError = true;
        direccionUsuario.classList.add("inputError");
    } else {
        direccionUsuario.classList.remove("inputError");
    }

    if (codigoCVV.value == "") {
        hayError = true;
        codigoCVV.classList.add("inputError");
    } else {
        codigoCVV.classList.remove("inputError");
    }


    if (hayError == true) {
        Swal.fire({
            "icon": "warning",
            "title": "Algo salió mal",
            "text": "Por favor complete los espacios vacios"
        })
        console.log("Rellene los espacios vacios");

    } else {
        Swal.fire({
            "icon": "success",
            "title": "Información guardada!",
            "text": "Tarjeta registrada"
        })
        registrarMetodoDePago();

    }
}

botonAgregar.addEventListener('click', validar)