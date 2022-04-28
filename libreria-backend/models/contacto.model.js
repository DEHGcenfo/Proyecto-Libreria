const mongoose = require('mongoose');

const schemaContacto = new mongoose.Schema({


    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    mensaje: { type: String, required: true },


});
module.exports = new mongoose.model('Contacto', schemaContacto, 'contactos');