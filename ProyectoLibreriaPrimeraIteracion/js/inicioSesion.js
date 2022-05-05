const botonInicioSesion = document.getElementById("btnIngresar")
const inputCorreo = document.getElementById("txt-correo")
const inputContrasenna = document.getElementById("txt-contrasenna")
const listarUsuarios = document.getElementById("slt-usuarios")

const validar = () => {
    let esCorrecto = false;
    let hayError = false
    listaPersonas.forEach(personaAux => {
        if ((personaAux.correo == inputCorreo.value) && (personaAux.contrasenna == inputContrasenna.value)) {
            localStorage.setItem('usuarioConectado', JSON.stringify(personaAux));
            esCorrecto = true;
        }
    });
    if (inputCorreo.value == "") {
        hayError = true;
        inputCorreo.classList.add("input-error");
    } else {
        inputCorreo.classList.remove("input-error");
    }
    if (inputContrasenna.value == "") {
        hayError = true;
        inputContrasenna.classList.add("input-error");
    } else {
        inputContrasenna.classList.remove("input-error");


    }





    if (hayError == true) {
        Swal.fire({
            'icon': 'error',
            'title': 'No ha podido iniciar sesión',
            'text': 'Faltan datos'
        }).then(() => {
            //Limpiar campos
            inputContrasenna.value = ''
            inputCorreo.value = ''
        })
    } else if (esCorrecto == false) {
        Swal.fire({
                "icon": "warning",
                "title": "Algo salió mal",
                "text": "Los datos son incorrectos"
            })
            .then(() => {
                //Limpiar campos
                inputContrasenna.value = ''
                inputCorreo.value = ''
            })

    }


    if (esCorrecto == true && listarUsuarios.value == 1) {



        window.location.href = "landingPageAdmin.html"

    } else if (esCorrecto == true && listarUsuarios.value == 2) {
        window.location.href = "landingPageCliente.html"
    }

};

botonInicioSesion.addEventListener("click", validar);