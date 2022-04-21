const nombreAutor = document.getElementById("tituloDelLibro");
const guardarCambios = document.getElementById("tenth-btn");
const premiosGanados = document.getElementById("nombreAutor");
const resenaAutor = document.getElementById("resenaLibro");
const detallesAutor = document.getElementById("detallesLibro");






const imprimir = () => {

    let nombre = nombreAutor.value;
    let premios = premiosGanados.value;
    let resena = resenaAutor.value;
    let detalles = detallesAutor.value;

    console.log("El nombre del libro es: ", nombre);
    console.log("El nombre del autor es: ", premios);
    console.log("La resena del libro es: ", resena);
    console.log("Los detalles del libro son: ", detalles)
};


const validar = () => {

    let hayError = false;

    if (nombreAutor.value == "") {
        hayError = true;
        nombreAutor.classList.add("inputError");
    } else {
        nombreAutor.classList.remove("inputError");
    }

    if (premiosGanados.value == "") {
        hayError = true;
        premiosGanados.classList.add("inputError");
    } else {
        premiosGanados.classList.remove("inputError");
    }

    if (resenaAutor.value == "") {
        hayError = true;
        resenaAutor.classList.add("inputError");
    } else {
        resenaAutor.classList.remove("inputError");
    }

    if (detallesAutor.value == "") {
        hayError = true;
        detallesAutor.classList.add("inputError");
    } else {
        detallesAutor.classList.remove("inputError");
    }


    if (hayError == true) {

        mensaje()
        Swal.fire({
            'icon': 'error',
            'title ': 'Oops...',
            'text ': 'Something went wrong!',
            'footer ': '<a href="">Why do I have this issue?</a>'
        })
        console.log("Por favor rellene los espacios");
    } else {
        mensaje();
        Swal.fire({
            'title': 'Do you want to save the changes?',
            'showDenyButton': 'true',
            'showCancelButton': 'true',
            'confirmButtonText': 'Save',
            'denyButtonText': 'Dont save',
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

};


guardarCambios.addEventListener('click', validar)