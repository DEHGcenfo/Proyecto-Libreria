//const cuerpoTabla = document.querySelector('#tblMetodosPago tbody');
const cuerpoTabla = document.querySelector('#sectionMetodosPago')
const btnSelect = document.getElementsByClassName('btnSelect')
const confirmar = document.getElementById('btnConfirmar')
let listaMetodos = [];
let listaMetodo = []
const inicializar = async() => {
    let data = {
        correo: JSON.parse(localStorage.getItem('usuarioConectado')).correo

    };

    listaMetodos = await obtenerDatosConParametro('listar-metodoDePago-por-correo', data);
    mostrarDatos();
};

confirmar.addEventListener('click', () => {
    listaMetodo.forEach(metodo => {
        localStorage.setItem('tarjetaSelec', JSON.stringify(metodo))
    })

    window.location.href = 'comprobarCompras.html'
})


const mostrarDatos = () => {
    cuerpoTabla.innerHTML = '';


    listaMetodos.forEach(metodo => {
        let carta = document.createElement('div')
        carta.classList.add('carta')

        let numero = document.createElement('p')
        numero.classList.add('numero')
        numero.textContent = `Numero de tarjeta: ${metodo.numeroTarjeta}`

        let fecha = document.createElement('p')
        fecha.classList.add('fecha')
        fecha.textContent = `Fecha Expiracion: ${metodo.fechaExpiracion}`

        let btnSelect = document.createElement('button')
        btnSelect.classList.add('btnComprar')
        btnSelect.innerHTML = 'Seleccionar'
            /*let fila = cuerpoTabla.insertRow()
            fila.insertCell().textContent = metodo.numeroTarjeta;
            fila.insertCell().textContent = metodo.fechaExpiracion;

        
            fila.insertCell().innerHTML = '<button class="btnSelect" type="button"> Seleccionar </button>'
            */

        btnSelect.addEventListener('click', () => {
            let push = false
            console.log(btnSelect)
            listaMetodo.push(metodo)

            push = true
            if (push == true) {
                Swal.fire({
                    "icon": "success",

                    "text": " Metodo de pago seleccionado"
                })


            } else {
                Swal.fire({
                    "icon": "warning",
                    "title": "Algo salió mal",

                })
            }

        })

        carta.appendChild(numero)
        carta.appendChild(fecha)
        carta.appendChild(btnSelect)
        cuerpoTabla.appendChild(carta)

    });




};


inicializar();