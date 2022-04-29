const mongoose = require('mongoose');

const schemaRegistroGenero = new mongoose.Schema({

    nombreGenero: { type: String, required: true },
    IdGenero: { type: Number, required: true, unique: true },

});
module.exports = new mongoose.model('Genero', schemaRegistroGenero, 'generos');