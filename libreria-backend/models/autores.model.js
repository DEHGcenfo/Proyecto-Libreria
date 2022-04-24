const mongoose = require('mongoose');

const schemaRegistroAutor = new mongoose.Schema({
    nombre: { type: Number, required: true, unique: true },
    premios: { type: String, required: true },
    resena: { type: String, required: true },
    detalles: { type: Number, required: true },
    estado: { type: String },

});
module.exports = new mongoose.model('Autor', schemaRegistroAutor, 'autores');