const metodosPagoLista = document.querySelector('#tblMetodosPago tbody')

const agregarMetodoPago = () => {
    metodosPagoLista.innerHTML = ''

    metodosPago.forEach(llamarMetodoPago => {
        let crearFila = metodosPagoLista.insertRow()
        crearFila.insertCell().textContent = llamarMetodoPago.numeroTarjeta
        crearFila.insertCell().innerHTML = llamarMetodoPago.fechaExpiracion
        crearFila.insertCell().innerHTML = llamarMetodoPago.btnSelect
    })
}

agregarMetodoPago()