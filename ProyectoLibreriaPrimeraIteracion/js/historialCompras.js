const historialComprasListar = document.querySelector('#tblHistorial tbody')

const agregarCompra = () => {
    historialComprasListar.innerHTML = ''

    jsonHistorialCompras.forEach(llamarCompra => {
        let crearFila = historialComprasListar.insertRow()
        crearFila.insertCell().innerHTML = llamarCompra.foto
        crearFila.insertCell().innerHTML = llamarCompra.informacion

        crearFila.insertCell().innerHTML = llamarCompra.botonFactura
    })
}

agregarCompra()