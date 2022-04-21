const botonEnviar = document.getElementById('btnEnviar')
const cuadroTexto = document.getElementById('cuadroTicket')

const validar = () => {
    let hayError = false

    if (cuadroTexto.value == '') {
        hayError = true
    }

    if (hayError == true) {
        Swal.fire({
            "icon": "warning",
            "title": "Algo salió mal",
            "text": "Sí necesitar ayuda, escribelo en el cuadro blanco antes de enviarlo"
        })
        console.log("Rellene el cuadro vacío");
    } else {
        Swal.fire({
            "icon": "success",
            "title": "ticket enviado!!",
            "text": "Gracias!"
        })


    }
}

botonEnviar.addEventListener("click", validar)