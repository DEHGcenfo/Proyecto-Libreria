const botonModificar = document.getElementById('btnModificarParametros')
const editarTarifaDesc1 = document.getElementById('editarTarifaDesc1')
const editarTarifaDesc2 = document.getElementById('editarTarifaDesc2')
const editarTarifaDesc3 = document.getElementById('editarTarifaDesc3')
const editarTarifaDesc4 = document.getElementById('editarTarifaDesc4')

const editarImpuesto = document.getElementById('editarImpuesto')
const editarMiniCompra = document.getElementById('editarMinimoCompra')
const editarEnvio = document.getElementById('editarEnvio')
let imprimir = () => {
    console.log('Cambios guardados')
}

const validar = () => {
    hayError = false

    if (editarTarifaDesc2.value == '' && editarTarifaDesc3.value == '' && editarTarifaDesc4.value == '' && editarTarifaDesc1.value == '' && editarImpuesto.value == '' && editarMiniCompra.value == '' && editarEnvio.value == '') {
        hayError = true;
        editarTarifaDesc1.classList.add("input-error");
        editarTarifaDesc2.classList.add("input-error");
        editarTarifaDesc3.classList.add("input-error");
        editarTarifaDesc4.classList.add("input-error");
        editarImpuesto.classList.add("input-error");
        editarMiniCompra.classList.add("input-error");
        editarEnvio.classList.add("input-error");
    } else {
        editarTarifaDesc1.classList.remove("input-error");
        editarTarifaDesc2.classList.remove("input-error");
        editarTarifaDesc3.classList.remove("input-error");
        editarTarifaDesc4.classList.remove("input-error");
        editarImpuesto.classList.remove("input-error");
        editarMiniCompra.classList.remove("input-error");
        editarEnvio.classList.remove("input-error");
    }


    if (hayError == true) {
        Swal.fire({
            "icon": "warning",
            "title": "Algo salió mal",
            "text": "Por favor modifique al menos un párametro"
        })
        console.log("Rellene los espacios vacios");
    } else {
        Swal.fire({
            "icon": "success",
            "title": "Parametros modificados!",
            "text": "Cambios guardados"
        })
    }
    imprimir();
}


botonModificar.addEventListener('click', validar)