const botonAgregar = document.getElementById('btnAgregar')
const inputNombre = document.getElementById('txt-nombre')
const listaProvincias = document.getElementById('slt-provincias')
const inputDireccion = document.getElementById('txt-direccionExacta')
const inputCorreo = document.getElementById('txt-correo')
const inputTelefono = document.getElementById('txt-telefono')


const registrarPuntoDeRetiro = () => {

    let data = {
        nombre: inputNombre.value,
        provincia: listaProvincias.value,
        direccionExtacta: inputDireccion.value,
        correo: inputCorreo.value,
        telefono: inputTelefono.value

    }
    registrarDatos("registrar-puntosDeRetiro", data)
};


const validar = () => {

    let hayError = false;

    if (inputNombre.value == "") {
        hayError = true;
        inputNombre.classList.add("inputError");
    } else {
        inputNombre.classList.remove("inputError");
    }

    if (listaProvincias.value == "") {
        hayError = true;
        listaProvincias.classList.add("inputError");
    } else {
        listaProvincias.classList.remove("inputError");
    }

    if (inputDireccion.value == "") {
        hayError = true;
        inputDireccion.classList.add("inputError");
    } else {
        inputDireccion.classList.remove("inputError");
    }

    if (inputCorreo.value == "") {
        hayError = true;
        inputCorreo.classList.add("inputError");
    } else {
        inputCorreo.classList.remove("inputError");
    }
    if (inputTelefono.value == "") {
        hayError = true;
        inputTelefono.classList.add("inputError");
    } else {
        inputTelefono.classList.remove("inputError");
    }

    if (hayError == true) {
        Swal.fire({
            "icon": "warning",
            "title": "Algo salió mal",
            "text": "Por favor complete los espacios vacios"
        });
        console.log("Rellene los espacios vacios");

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Enviado Exitosamente',
            'text': 'Por favor esperar respuesta por medio del correo'
        })
        registrarPuntoDeRetiro();
    }


};



botonAgregar.addEventListener('click', validar);