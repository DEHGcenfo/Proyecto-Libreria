const botonGuardar = document.getElementById('test-button-guardar');
const inputpassword1 = document.getElementById('pwAnterior');
const inputContrasenna = document.getElementById('pswd1');
const inputConfirmacion = document.getElementById('pswd2');


const validar = () => {
  let hayError = false;
  // solo negamos el if
  if (!(inputpassword1.value && inputContrasenna.value && inputConfirmacion.value && inputContrasenna.value === inputConfirmacion.value)) {
    inputContrasenna.classList.add("input-error");
    inputConfirmacion.classList.add("input-error");
    console.log("Las contraseñas no coinciden");
    hayError = true;
  } else {
    inputContrasenna.classList.remove("input-error");
    inputConfirmacion.classList.remove("input-error");

  }



  if (hayError) {
    Swal.fire({
      "icon": "warning",
      "title": "Algo salió mal",
      "text": "Porfavor rellene los espacios vacios"
    })
    console.log("rellene los espacios vacios");
  } else {
    Swal.fire({
      "icon": "success",
      "title": "Contraseña modificada con exito!!",
    })
    console.log(`anterior: ${inputpassword1.value}`);
    console.log(`nueva: ${inputContrasenna.value}`);
    console.log(`confirmacion: ${inputConfirmacion.value}`);
    imprimir();
  }


}
botonGuardar.addEventListener('click', validar);
