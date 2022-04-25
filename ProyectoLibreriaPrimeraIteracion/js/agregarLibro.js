const tituloLibro = document.getElementById('tituloDelLibro')
const autor = document.getElementById('nombreAutor')
const isbn = document.getElementById('codigoISBN')
const fecha = document.getElementById('fechaPublicacion')
const editorial = document.getElementById('nombreEditorial')
const premios = document.getElementById('premios')
const idioma = document.getElementById('idioma')
const generoLiterario = document.getElementById('generoLiterario')
const formato = document.getElementById('formatoLibro')
const resenna = document.getElementById('resenna')
const precio = document.getElementById('precioLibro')

const btnAgregarLibro = document.getElementById('agregarLibro')

const registrarLibro = () => {
    let data = {
        titulo: tituloLibro.value,
        resenna: resenna.value,
        isbn: isbn.value,
        fechaPublicacion: fecha.value,
        editorial: editorial.value,
        premios: premios.value,
        idioma: idioma.value,
        generosLiterarios: generoLiterario.value,
        formato: formato.value,
        autor: autor.value,
        precio: precio.value
    }
    registrarDatos("registrar-libro", data)
}

const validar = () => {

    let hayError = false;

    if (tituloLibro.value == "") {
        hayError = true;
        tituloLibro.classList.add("inputError");
    } else {
        tituloLibro.classList.remove("inputError");
    }

    if (resenna.value == "") {
        hayError = true;
        resenna.classList.add("inputError");
    } else {
        resenna.classList.remove("inputError");
    }

    if (isbn.value == "") {
        hayError = true;
        isbn.classList.add("inputError");
    } else {
        isbn.classList.remove("inputError");
    }

    if (fecha.value == "") {
        hayError = true;
        fecha.classList.add("inputError");
    } else {
        fecha.classList.remove("inputError");
    }
    if (editorial.value == "") {
        hayError = true;
        editorial.classList.add("inputError");
    } else {
        editorial.classList.remove("inputError");
    }
    if (idioma.value == "") {
        hayError = true;
        idioma.classList.add("inputError");
    } else {
        idioma.classList.remove("inputError");
    }
    if (generoLiterario.value == "") {
        hayError = true;
        generoLiterario.classList.add("inputError");
    } else {
        generoLiterario.classList.remove("inputError");
    }
    if (formato.value == "") {
        hayError = true;
        formato.classList.add("inputError");
    } else {
        formato.classList.remove("inputError");
    }
    if (autor.value == "") {
        hayError = true;
        autor.classList.add("inputError");
    } else {
        autor.classList.remove("inputError");
    }
    if (precio.value == "") {
        hayError = true;
        precio.classList.add("inputError");
    } else {
        precio.classList.remove("inputError");
    }



    if (hayError == true) {


        Swal.fire({
            'icon': 'error',
            'title ': 'Oops...',
            'text ': 'Something went wrong!',
            'footer ': '<a href="">Why do I have this issue?</a>'
        })
        console.log("Por favor rellene los espacios");
    } else {

        Swal.fire({
            'title': 'Do you want to save the changes?',
            'showDenyButton': 'true',
            'showCancelButton': 'true',
            'confirmButtonText': 'Save',
            'denyButtonText': 'Dont save',
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
                registrarLibro()
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

};

btnAgregarLibro.addEventListener('click', validar)