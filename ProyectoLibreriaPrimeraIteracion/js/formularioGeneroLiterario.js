const nombreGenero = document.getElementById("tituloGeneroLiterario");
const guardarCambios = document.getElementById("tenth-btn");







const imprimir = () => {

    let nombre = nombreGenero.value;


    console.log("El nombre del autor es ", nombre);

};


const validar = () => {

    let hayError = false;

    if (nombreGenero.value == "") {
        hayError = true;
        nombreGenero.classList.add("inputError");
    } else {
        nombreGenero.classList.remove("inputError");
    }



    if (hayError === true) {
        console.log("Por favor rellene los espacios");
        Swal.fire({
            'title': '¡Por favor rellene los espacios!',
            'icon': 'error'

        })

    } else {
        imprimir();
        Swal.fire({
            'title': '¿Desea guardar los cambios?',
            'showDenyButton': 'true',
            'showCancelButton': 'true',
            'confirmButtonText': 'Guardar'

        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire('¡Resultado Guardado!', '', 'success')
            }
        })
    }

};



guardarCambios.addEventListener("click", validar);