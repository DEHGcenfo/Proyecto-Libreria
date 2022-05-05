const mongoose = require('mongoose');

const schemaRegistroLibros = new mongoose.Schema({

    foto: { type: String, required: false },
    titulo: { type: String, required: true },
    resenna: { type: String, required: true },
    isbn: { type: Number, required: true, unique: true },
    fechaPublicacion: { type: String, required: true },
    editorial: { type: String, required: true },
    premios: { type: String, required: true },
    idioma: { type: String, required: true },
    generosLiterarios: { type: String, required: true },
    formato: { type: String, required: true },
    autor: { type: String, required: true },
    precio: { type: Number, required: true },

});
module.exports = new mongoose.model('Libro', schemaRegistroLibros, 'libros');