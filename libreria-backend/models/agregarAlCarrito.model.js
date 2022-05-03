const mongoose = require('mongoose');

const schemaAgregarAlCarrito = new mongoose.Schema({


    titulo: { type: String, required: true },

    isbn: { type: Number, required: true, unique: true },

    idioma: { type: String, required: true },

    formato: { type: String, required: true },
    autor: { type: String, required: true },
    precio: { type: String, required: true },
    estado: { type: String }

});
module.exports = new mongoose.model('Agregar', schemaAgregarAlCarrito, 'compra');