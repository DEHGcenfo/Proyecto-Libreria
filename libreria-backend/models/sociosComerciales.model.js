const mongoose = require('mongoose');

const schemaRegistroSociosComerciales = new mongoose.Schema({


    fotoSocio: { type: String, required: false },
    nombreSocio: { type: String, required: true },
    ubicacionSocio: { type: String, required: true },
    telefonoSocio: { type: Number, required: true },

});
module.exports = new mongoose.model('SocioComercial', schemaRegistroSociosComerciales, 'sociosComerciales');