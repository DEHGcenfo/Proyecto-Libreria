const btnParametros = document.getElementById('btnModificar')

let imprimir = () => {
    console.log('Editar parametros del sistema')
}

const validar = () => {
    entrar = true

    imprimir();

    if (entrar == true) {

        window.location.href = "editarParametros.html"

    } else {
        Swal.fire({
            'icon': 'error',
            'title ': '',
            'text ': 'Por favor modifique algún parámetro',

        })
        console.log("Por favor rellene los espacios");
    }
}

btnParametros.addEventListener('click', validar)