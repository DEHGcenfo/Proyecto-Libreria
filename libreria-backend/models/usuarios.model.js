const mongoose = require('mongoose');

const schemaRegistroUsuario = new mongoose.Schema({


    tipoUsuario: { type: Number, required: true },
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    genero: { type: Number, required: true },
    tipoId: { type: Number, required: true },
    identificacion: { type: String, required: true, unique: true },
    numeroId: { type: String, required: true, unique: true },
    provincia: { type: String, required: true },
    canton: { type: String, required: true },
    distrito: { type: String, required: true },
    direccionExacta: { type: String, required: true },
    contrasenna: { type: String, required: true },
    estado: { type: String },

});
module.exports = new mongoose.model('Usuario', schemaRegistroUsuario, 'usuarios');