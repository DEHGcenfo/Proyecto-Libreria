const mongoose = require('mongoose');

const schemaRegistroMetodosDePago = new mongoose.Schema({



    nombreTarjeta: { type: String, required: true },
    numeroTarjeta: { type: Number, required: true, unique: true },
    fechaExpiracion: { type: String, required: true, },
    nombreUsuario: { type: String, required: true, },
    direccionUsuario: { type: String, required: true },
    codigoCVV: { type: String, required: true },
    correo: { type: String, required: true }

});
module.exports = new mongoose.model('metodoDePago', schemaRegistroMetodosDePago, 'metodosDePago');