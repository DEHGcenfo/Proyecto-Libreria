const nombreAutor = document.getElementById("tituloAutor");
const fotoAutor = document.getElementById('insertImage')
const foto = document.getElementById('fotoAutor')
const guardarCambios = document.getElementById("tenth-btn");
const premiosGanados = document.getElementById("premiosAutor");
const resenaAutor = document.getElementById("resenaAutor");
const detallesAutor = document.getElementById("detallesAutor");

const registrarAutor = () => {

    let data = {

        nombre: nombreAutor.value,
        premios: premiosGanados.value,
        resena: resenaAutor.value,
        detalles: detallesAutor.value,
        fotoAutor: foto.src
    }
    registrarDatos("registrar-autor", data)
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
        registrarAutor();

    }


};



guardarCambios.addEventListener('click', validar);