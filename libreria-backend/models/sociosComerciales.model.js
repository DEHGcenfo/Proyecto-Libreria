const mongoose = require('mongoose');

const schemaRegistroSociosComerciales = new mongoose.Schema({



    nombre: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    ubicacion: { type: String, required: true },
    telefono: { type: Number, required: true, unique: true },

});
module.exports = new mongoose.model('socioComercial', schemaSociosComerciales, 'sociosComerciales');