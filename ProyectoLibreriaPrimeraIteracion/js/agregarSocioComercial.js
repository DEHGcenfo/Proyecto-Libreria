const nombreSocio = document.getElementById('nombreSocio')
const fotoSocio = document.getElementById('fotoAgregar')
const ubicacionSocio = document.getElementById('ubicacionSocio')
const telefonoSocio = document.getElementById('numeroSocio')
const botonGuardar = document.getElementById('tenth-btn')

const registrarSocioComercial = () => {
    let data = {
        nombreSocio: nombreSocio.value,
        ubicacionSocio: ubicacionSocio.value,
        telefonoSocio: telefonoSocio.value
    }
    registrarDatos("registrar-sociosComerciales", data)
};

const validar = () => {

    let hayError = false

    if (nombreSocio.value == "") {
        hayError = true;
        nombreSocio.classList.add("inputError");
    } else {
        nombreSocio.classList.remove("inputError");
    }



    if (ubicacionSocio.value == "") {
        hayError = true;
        ubicacionSocio.classList.add("inputError");
    } else {
        ubicacionSocio.classList.remove("inputError");
    }

    if (telefonoSocio.value == "") {
        hayError = true;
        telefonoSocio.classList.add("inputError");
    } else {
        telefonoSocio.classList.remove("inputError");
    }


    if (hayError == true) {
        Swal.fire({
            "icon": "warning",
            "title": "Algo salió mal",
            "text": "Por favor complete los espacios vacios"
        })
        console.log("Rellene los espacios vacios");

    } else {

        registrarSocioComercial();

    }
};

botonGuardar.addEventListener('click', validar)