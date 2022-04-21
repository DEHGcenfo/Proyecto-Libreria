const nombreAutor = document.getElementById("tituloAutor");
const guardarCambios = document.getElementById("tenth-btn");
const premiosGanados = document.getElementById("premiosAutor");
const resenaAutor = document.getElementById("resenaAutor");
const detallesAutor = document.getElementById("detallesAutor");






const imprimir = () => {

    let nombre = nombreAutor.value;
    let premios = premiosGanados.value;
    let resena = resenaAutor.value;
    let detalles = detallesAutor.value; 

    console.log("El nombre del autor es " , nombre);
    console.log("Los premios ganados por el autor son: ", premios);
    console.log("La resena del autor es: ", resena);
    console.log("Los detalles del autor son: ", detalles)
};


const validar = () => {

    let hayError = false;

    if (nombreAutor.value == ""){
        hayError = true;
        nombreAutor.classList.add("inputError");
   } else {
        nombreAutor.classList.remove("inputError");
}

if (premiosGanados.value == ""){
    hayError = true;
    premiosGanados.classList.add("inputError");
} else {
    premiosGanados.classList.remove("inputError");
}

if (resenaAutor.value == ""){
    hayError = true;
    resenaAutor.classList.add("inputError");
} else {
    resenaAutor.classList.remove("inputError");
}

if (detallesAutor.value == ""){
    hayError = true;
    detallesAutor.classList.add("inputError");
} else {
    detallesAutor.classList.remove("inputError");
}


   if (hayError === true) {
       console.log("Por favor rellene los espacios");
        /*Swal.fire({
        'icon' : 'error',
        'title ': 'Oops...',
        'text ': 'Something went wrong!',
        'footer ': '<a href="">Why do I have this issue?</a>'
      })*/
      
   } else {
       imprimir ();
        /*Swal.fire({
        'title': 'Do you want to save the changes?',
        'showDenyButton': 'true',
        'showCancelButton': 'true',
        'confirmButtonText': 'Save',
        'denyButtonText': 'Dont save',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })*/
   }

};



guardarCambios.addEventListener("click", validar);

