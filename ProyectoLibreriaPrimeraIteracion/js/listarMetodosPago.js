const cuerpoTabla = document.querySelector('#tblMetodosPago tbody');
let listaMetodos = [];

const inicializar = async() => {
    let data = {
        correo: JSON.parse(localStorage.getItem('usuarioConectado')).correo

    };

    listaMetodos = await obtenerDatosConParametro('listar-metodoDePago-por-correo', data);
    mostrarDatos();
};

const mostrarDatos = () => {
    cuerpoTabla.innerHTML = '';

    listaMetodos.forEach(metodo => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().textContent = metodo.nombreTarjeta;
        fila.insertCell().textContent = metodo.numeroTarjeta;
    });
};


inicializar();