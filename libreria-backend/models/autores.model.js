const mongoose = require('mongoose');

const schemaRegistroAutor = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    fotoAutor: { type: String, required: false, unique: false },
    premios: { type: String, required: true },
    resena: { type: String, required: true },
    detalles: { type: String, required: true },
    estado: { type: String },

});
module.exports = new mongoose.model('Autor', schemaRegistroAutor, 'autores');