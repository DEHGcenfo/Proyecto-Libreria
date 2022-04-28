const mongoose = require('mongoose');

const schemaRegistroPuntosDeRetiro = new mongoose.Schema({


    nombre: { type: String, required: true },
    provincia: { type: String, required: true },
    direccionExacta: { type: String, required: true, unique: true },
    ubicacionMapa: { required: false },
    telefono: { type: String, required: false },
    correo: { type: String, required: false }

});
module.exports = new mongoose.model('PuntoDeRetiro', schemaRegistroPuntosDeRetiro, 'puntosDeRetiro');