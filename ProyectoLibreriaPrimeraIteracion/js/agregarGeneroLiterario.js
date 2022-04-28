const nombreGenero = document.getElementById('nombreGenero')
const descripcionGenero = document.getElementById('descripcionGenero')
const guardarCambios = document.getElementById('tenth-btn')


const agregarGeneroLiterario = () => {
    let data = {
        nombreGenero: nombreGenero.value,
        descripcionGenero: descripcionGenero.value,
    }
    registrarDatos("registrar-genero", data)
}

const validar = () => {

    let hayError = false

    if (nombreGenero.value == "") {
        hayError = true;
        nombreGenero.classList.add("inputError");
    } else {
        nombreGenero.classList.remove("inputError");
    }

    if (descripcionGenero.value == "") {
        hayError = true;
        descripcionGenero.classList.add("inputError");
    } else {
        descripcionGenero.classList.remove("inputError");
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
            "text": "Genero literario registrado"
        })
        agregarGeneroLiterario();

    }
}

guardarCambios.addEventListener('click', validar);