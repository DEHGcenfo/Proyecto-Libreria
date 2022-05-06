const ticket = document.getElementById("ticket");
const boton = document.getElementById("btnEnviar");

const registrarTicket = () => {

    let data = {

        ticket: ticket.value,

    }
    registrarDatos("registrar-ticket", data)
};


const validar = () => {

    let hayError = false;

    if (ticket.value == "") {
        hayError = true;
        ticket.classList.add("inputError");
    } else {
        ticket.classList.remove("inputError");
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
        registrarTicket();

    }


};



boton.addEventListener('click', validar);