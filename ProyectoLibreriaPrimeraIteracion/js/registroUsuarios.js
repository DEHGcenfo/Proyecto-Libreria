const botonRegistrar = document.getElementById('btn-registrar')
const listaUsuarios = document.getElementById("slt-tipoUsuarios")
const fotoUsuario = document.getElementById('fotoAgregar')
const inputNombre = document.getElementById("txt-nombre")
const inputCorreo = document.getElementById("txt-correo")
const listaGeneros = document.getElementById("slt-genero")
const listaTiposId = document.getElementById("slt-tipoId")
const inputIdentificacion = document.getElementById("txt-identificacion")
const listaProvincias = document.getElementById("slt-provincias")
const inputCanton = document.getElementById("txt-canton")
const inputDistrito = document.getElementById("txt-distrito")
const inputDireccionExacta = document.getElementById("txt-direccionExacta")
const inputContrasenna = document.getElementById("txt-contrasenna")
const inputConfirmacion = document.getElementById("txt-confirmacion")


const registrarUsuario = () => {


    let data = {
        tipoUsuario: listaUsuarios.value,
        fotoUsuario: fotoUsuario.src,
        nombre: inputNombre.value,
        correo: inputCorreo.value,
        genero: listaGeneros.value,
        tipoId: listaTiposId.value,
        identificacion: inputIdentificacion.value,
        numeroId: inputIdentificacion.value,
        provincia: listaProvincias.value,
        canton: inputCanton.value,
        distrito: inputDistrito.value,
        direccionExacta: inputDireccionExacta.value,
        contrasenna: inputContrasenna.value


    }

    registrarDatos("registrar-usuario", data)
    window.location.href = 'inicioSesion.html'
};

const validar = () => {
    let hayError = false;

    if (listaUsuarios.value == "") {
        hayError = true;
        listaUsuarios.classList.add("input-error");
    } else {
        listaUsuarios.classList.remove("input-error");
    }
    if (inputCorreo.value == "") {
        hayError = true;
        inputCorreo.classList.add("input-error");
    } else {
        inputCorreo.classList.remove("input-error");
    }
    if (inputNombre.value == "") {
        hayError = true;
        inputNombre.classList.add("input-error");
    } else {
        inputNombre.classList.remove("input-error");
    }
    if (listaGeneros.value == "") {
        hayError = true;
        listaGeneros.classList.add("input-error");
    } else {
        listaGeneros.classList.remove("input-error");
    }
    if (listaTiposId.value == "") {
        hayError = true;
        listaTiposId.classList.add("input-error");
    } else {
        listaTiposId.classList.remove("input-error");
    }
    if (inputIdentificacion.value == "") {
        hayError = true;
        inputIdentificacion.classList.add("input-error");
    } else {
        inputIdentificacion.classList.remove("input-error");
    }
    if (listaProvincias.value == "") {
        hayError = true;
        listaProvincias.classList.add("input-error");
    } else {
        listaProvincias.classList.remove("input-error");
    }
    if (inputCanton.value == "") {
        hayError = true;
        inputCanton.classList.add("input-error");
    } else {
        inputCanton.classList.remove("input-error");
    }
    if (inputDistrito.value == "") {
        hayError = true;
        inputDistrito.classList.add("input-error");
    } else {
        inputDistrito.classList.remove("input-error");
    }
    if (inputDireccionExacta.value == "") {
        hayError = true;
        inputDireccionExacta.classList.add("input-error");
    } else {
        inputDireccionExacta.classList.remove("input-error");
    }
    if (inputConfirmacion.value != inputContrasenna.value || inputContrasenna.value == "") {
        inputContrasenna.classList.add("input-error");
        inputConfirmacion.classList.add("input-error");
        console.log("Las contraseñas no coinciden");
    } else {
        inputContrasenna.classList.remove("input-error");
        inputConfirmacion.classList.remove("input-error");

    }
    if (hayError == true) {
        Swal.fire({
            "icon": "warning",
            "title": "Algo salió mal",
            "text": "Porfavor rellene los espacios vacios"
        })
        console.log("rellene los espacios vacios");
    } else {
        Swal.fire({
            "icon": "success",
            "title": "Usuario registrado con exito!!",
            "text": "Porfavor revise su correo electrónico"
        })

        registrarUsuario();
    }





};
botonRegistrar.addEventListener("click", validar);