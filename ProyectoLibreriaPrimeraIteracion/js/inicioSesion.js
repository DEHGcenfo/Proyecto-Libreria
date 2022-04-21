const botonInicioSesion = document.getElementById("btnIngresar")
const inputCorreo = document.getElementById("txt-correo")
const inputContrasenna = document.getElementById("txt-contrasenna")
const listarUsuarios = document.getElementById("slt-usuarios")
const imprimir = () => {
    let usuario = listarUsuarios.value;
    console.log("El tipo de usuario es: ", usuario);

    let correo = inputCorreo.value;
    console.log("El correo es: ", correo);

    let contrasenna = inputContrasenna.value;
    console.log("La contrasenna es: ", contrasenna);


};
const validar = () => {
    let esCorrecto = false;
    let hayError = false


    listaPersonas.forEach(personasAux => {
        if (personasAux.tipoUsuario == listarUsuarios.value && personasAux.correo == inputCorreo.value && personasAux.contrasenna == inputContrasenna.value) {
            esCorrecto = true
            localStorage.setItem('usuarioConectado', JSON.stringify(personasAux))
        }
    })


    if (inputCorreo.value == "" || esCorrecto == false) {
        hayError = true;
        inputCorreo.classList.add("input-error");
    } else {
        inputCorreo.classList.remove("input-error");
    }
    if (inputContrasenna.value == "" || esCorrecto == false) {
        hayError = true;
        inputContrasenna.classList.add("input-error");
    } else {
        inputContrasenna.classList.remove("input-error");
    }
    if (hayError == true || esCorrecto == false) {
        Swal.fire({
                "icon": "warning",
                "title": "Algo salió mal",
                "text": "Porfavor rellene los espacios vacios"
            })
            .then(() => {
                //Limpiar campos
                inputContrasenna.value = ''
                inputCorreo.value = ''
            })
        console.log("rellene los espacios vacios");
    }

    if (esCorrecto == true && listarUsuarios.value == 1) {



        window.location.href = "landingPageAdmin.html"

    } else if (esCorrecto == true && listarUsuarios.value == 2) {
        window.location.href = "landingPageCliente.html"
    }

};

botonInicioSesion.addEventListener("click", validar);