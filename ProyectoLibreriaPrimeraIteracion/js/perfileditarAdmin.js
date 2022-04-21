const firstName = document.getElementById('primerNombre');
const secondName = document.getElementById('segundoNombre');
const firstLastname = document.getElementById('primerApellido');
const secondLastname = document.getElementById('segundoApellido');
const listaProvincias = document.getElementById('listProv');
const listaCanton = document.getElementById('listCant');
const listaDistrito = document.getElementById('listDis');
const generoUsuario = document.getElementById('genero');
const identify = document.getElementById('identificacion');
const metodosDePago = document.getElementById('metodPag');
const contrasenna = document.getElementById('contrasena');
const botonGuardar = document.getElementById('botonGuardar');

const imprimir = () => {
    let primerN = firstName.value;
    let segundoN = secondName.value;
    let primerA = firstLastname.value;
    let segundoA = secondLastname.value;
    let provincias = listaProvincias.value;
    let Canton = listaCanton.value;
    let Distrito = listaDistrito.value;
    let genero = generoUsuario.value;
    let identificacion = identify.value;
    console.log('El primer nombre es, ', primerN);
    console.log('El segundo nombre es, ', segundoN);
    console.log('El primer apellido es, ', primerA);
    console.log('El segundo apellido es, ', segundoA);
    console.log('La provincia del usuario, ', provincias);
    console.log('El canton del usuario es, ', Canton);
    console.log('El distrito del usuario es, ', Distrito);
    console.log('El genero del usuario es, ', genero);
    console.log('La identificacion del usuario es, ', identificacion);


}

const validar = () => {

    let hayError = false;

    if (firstName.value == '') {
        hayError = true;
        firstName.classList.add('inputError');
    } else {
        firstName.classList.remove('inputError');
    }

    if (secondName.value == '') {
        hayError = true;
        secondName.classList.add('inputError');
    } else {
        secondName.classList.remove('inputError');
    }

    if (firstLastname.value == '') {
        hayError = true;
        firstLastname.classList.add('inputError');
    } else {
        firstLastname.classList.remove('inputError');

    }

    if (secondLastname.value == '') {
        hayError = true;
        secondLastname.classList.add('inputError');
    } else {
        secondLastname.classList.remove('inputError');

    }

    if (listaProvincias.value == '') {
        hayError = true;
        listaProvincias.classList.add('inputError');
    } else {
        listaProvincias.classList.remove('inputError');

    }

    if (listaCanton.value == '') {
        hayError = true;
        listaCanton.classList.add('inputError');
    } else {
        listaCanton.classList.remove('inputError');

    }

    if (listaDistrito.value == '') {
        hayError = true;
        listaDistrito.classList.add('inputError');
    } else {
        listaDistrito.classList.remove('inputError');

    }

    if (generoUsuario.value == '') {
        hayError = true;
        generoUsuario.classList.add('inputError');
    } else {
        generoUsuario.classList.remove('inputError');

    }

    if (identify.value == '') {
        hayError = true;
        identify.classList.add('inputError');
    } else {
        identify.classList.remove('inputError');

    }

    if (metodosDePago.value == '') {
        hayError = true;
        metodosDePago.classList.add('inputError');
    } else {
        metodosDePago.classList.remove('inputError');

    }

    if (contrasenna.value == '') {
        hayError = true;
        contrasenna.classList.add('inputError');
    } else {
        contrasenna.classList.remove('inputError');

    }

    if (hayError == true) {
        swal.fire('Por favor rellene todos los espacios');
    } else {
        imprimir();
        Swal.fire({
                "icon": "success",
                "title": "Cambios guardados correctamente",

            }

        )
    }
};

botonGuardar.addEventListener('click', validar)