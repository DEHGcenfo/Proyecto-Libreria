const tablaListar = document.querySelector('#tbCarritoCompras tbody')





const agregarLibro = () => {
    tablaListar.innerHTML = ''


    listaCarritoCompras.forEach(llamarCarritoCompras => {
        let crearFila = tablaListar.insertRow()
        crearFila.insertCell().innerHTML = llamarCarritoCompras.Foto
        crearFila.insertCell().innerHTML = llamarCarritoCompras.Nombre
        crearFila.insertCell().innerHTML = llamarCarritoCompras.Autor
        crearFila.insertCell().textContent = llamarCarritoCompras.Cantidad
        crearFila.insertCell().textContent = llamarCarritoCompras.Precio
        crearFila.insertCell().textContent = llamarCarritoCompras.Subtotal
        crearFila.insertCell().innerHTML = llamarCarritoCompras.Eliminar


    })
}



agregarLibro()