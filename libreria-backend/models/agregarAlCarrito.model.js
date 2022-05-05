const mongoose = require('mongoose');

const schemaAgregarAlCarrito = new mongoose.Schema({

    //datos: { type: Array, required: true },
    correo: { type: String, required: true },
    titulo: { type: String, required: true },
    //foto: { type: String, required: true },
    isbn: { type: Number, required: true, unique: false },

    //idioma: { type: String, required: true },

    formato: { type: String, required: true },
    autor: { type: String, required: true },
    precio: { type: Number, required: true },
    estado: { type: String }

});
module.exports = new mongoose.model('Agregar', schemaAgregarAlCarrito, 'compra');