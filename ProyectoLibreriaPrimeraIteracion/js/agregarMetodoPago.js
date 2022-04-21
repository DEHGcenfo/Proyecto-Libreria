const inputNombreTarjeta = document.getElementById('nombreTarjeta')
const inputNombreUsuario = document.getElementById('nombreUsuario')
const inputFecha = document.getElementById('fechaExpiracion')
const inputNumeroTarjeta = document.getElementById('numeroTarjeta')
const inputDireccion = document.getElementById('direccion')
const inputCVV = document.getElementById('codigoCVV')
const botonAgregar = document.getElementById('botonAgregar')

let imprimir = () => {
    console.log("Nombre de la tarjeta: ", inputNombreTarjeta.value)
    console.log("Nombre de usuario: ", inputNombreUsuario.value)
    console.log("Fecha de expiracion: ", inputFecha.value)
    console.log("Numero de tarjeta", inputNumeroTarjeta.value)
    console.log("Direccion/Residencia:", inputDireccion.value)
    console.log("Codigo CVV", inputCVV.value)
}

const validar = () => {
    hayError = false
    if (inputNombreTarjeta.value == '' || inputNombreUsuario.value == '' || inputFecha.value == '' || inputNumeroTarjeta.value == '' || inputDireccion.value == '' || inputDireccion.value == '' || inputCVV.value == '') {
        hayError = true
        inputNombreTarjeta.classList.add("Input-error")
        inputNombreUsuario.classList.add("Input-error")
        inputNumeroTarjeta.classList.add("Input-error")
        inputFecha.classList.add("Input-error")
        inputDireccion.classList.add("Input-error")
        inputCVV.classList.add("Input-error")
    } else {
        inputNombreTarjeta.classList.remove("Input-error")
        inputNombreUsuario.classList.remove("Input-error")
        inputNumeroTarjeta.classList.remove("Input-error")
        inputFecha.classList.remove("Input-error")
        inputDireccion.classList.remove("Input-error")
        inputCVV.classList.remove("Input-error")
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
    }
    imprimir();
}

botonAgregar.addEventListener('click', validar)