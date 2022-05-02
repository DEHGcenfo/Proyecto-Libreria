const mongoose = require('mongoose');

const schemaRegistroParametro = new mongoose.Schema({
    Impuesto: { type: Number, required: true, unique: true },
    minimoCompras: { type: Number, required: true },
    costoEnvio: { type: Number, required: true },
    Tarifa1: { type: Number, required: true },
    Tarifa2: { type: Number, required: true },
    Tarifa3: { type: Number, required: true },
    Tarifa4: { type: Number, required: true }
});
module.exports = new mongoose.model('Parametro', schemaRegistroParametro, 'Parametros');