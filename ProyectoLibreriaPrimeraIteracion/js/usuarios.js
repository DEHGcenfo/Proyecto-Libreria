let listaPersonas = [{
    "tipoUsuario": 1,
    "correo": "leetroms21@gmail.com",
    "contrasenna": "123"
}, {
    "tipoUsuario": 2,
    "correo": "Enrique@gmail.com",
    "contrasenna": "123"
}, {
    "tipoUsuario": 2,
    "correo": "Saully@gmail.com",
    "contrasenna": "123"
}, {
    "tipoUsuario": 1,
    "correo": "Guiselle@gmail.com",
    "contrasenna": "123"
}];




listaPersonas.forEach(personasAux => {
    console.log(personasAux.correo, personasAux.contrasenna, personasAux.tipoUsuario);
});