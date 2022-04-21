const buttonDelete = document.getElementsByClassName('btnDelete')

const eliminarCompra = () => {

    Swal.fire({
        title: 'Seguro que deseas eliminar el producto?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Si',
        denyButtonText: 'No',
        customClass: {
            actions: 'my-actions',
            cancelButton: 'order-1 right-gap',
            confirmButton: 'order-2',
            denyButton: 'order-3',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Producto Eliminado!', '', 'success')
        }
    })




}

for (let i = 0; i < buttonDelete.length; i++) {
    buttonDelete[i].addEventListener('click', eliminarCompra, false);
}