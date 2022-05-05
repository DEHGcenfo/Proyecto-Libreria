const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.getElementById('txt-filtro');
let listaPersonas = [];

const inicializar = async() => {
    listaPersonas = await obtenerDatos('listar-usuarios');
    mostrarDatos();
};
const mostrarDatos = () => {
    cuerpoTabla.innerHTML = '';

    listaPersonas.forEach(personaAux => {
        if (personaAux.nombre.toLowerCase().includes(inputFiltro.value.toLowerCase()) || personaAux.correo.toLowerCase().includes(inputFiltro.value.toLowerCase())) {
            let fila = cuerpoTabla.insertRow();

            fila.insertCell().textContent = personaAux.tipoUsuario;
            fila.insertCell().textContent = personaAux.correo;
            fila.insertCell().textContent = personaAux.nombre;
            fila.insertCell().textContent = personaAux.nacimiento;
        }
    });
};

inicializar();
inputFiltro.addEventListener('keyup', () => {
    mostrarDatos();
});