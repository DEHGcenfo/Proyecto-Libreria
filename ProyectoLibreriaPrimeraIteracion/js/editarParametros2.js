const Impuesto = document.getElementById("editarImpuesto");
const minimoCompras = document.getElementById('editarMinimoCompra')
const costoEnvio = document.getElementById('editarEnvio')
const Tarifa1 = document.getElementById("editarTarifaDesc1");
const Tarifa2 = document.getElementById("editarTarifaDesc2");
const Tarifa3 = document.getElementById("editarTarifaDesc3");
const Tarifa4 = document.getElementById("editarTarifaDesc4");
const btnModificar = document.getElementById("btnModificarParametros");

const registrarParametro = () => {

    let data = {

        Impuesto: Impuesto.value,
        minimoCompras: minimoCompras.value,
        costoEnvio: costoEnvio.value,
        Tarifa1: Tarifa1.value,
        Tarifa2: Tarifa2.value,
        Tarifa3: Tarifa3.value,
        Tarifa4: Tarifa3.value,
    }
    registrarDatos("registrar-parametro", data)
};


const validar = () => {

    let hayError = false;

    if (Impuesto.value == "") {
        hayError = true;
        Impuesto.classList.add("inputError");
    } else {
        Impuesto.classList.remove("inputError");
    }

    if (minimoCompras.value == "") {
        hayError = true;
        minimoCompras.classList.add("inputError");
    } else {
        minimoCompras.classList.remove("inputError");
    }

    if (costoEnvio.value == "") {
        hayError = true;
        costoEnvio.classList.add("inputError");
    } else {
        costoEnvio.classList.remove("inputError");
    }

    if (Tarifa1.value == "") {
        hayError = true;
        Tarifa1.classList.add("inputError");
    } else {
        Tarifa1.classList.remove("inputError");
    }

    if (Tarifa2.value == "") {
        hayError = true;
        Tarifa2.classList.add("inputError");
    } else {
        Tarifa2.classList.remove("inputError");
    }

    if (Tarifa3.value == "") {
        hayError = true;
        Tarifa3.classList.add("inputError");
    } else {
        Tarifa3.classList.remove("inputError");
    }

    if (Tarifa4.value == "") {
        hayError = true;
        Tarifa4.classList.add("inputError");
    } else {
        Tarifa4.classList.remove("inputError");
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
        registrarParametro();

    }


};



btnModificar.addEventListener('click', validar);