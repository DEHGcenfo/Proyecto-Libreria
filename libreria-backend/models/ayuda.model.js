const mongoose = require('mongoose');

const schemaRegistroticket = new mongoose.Schema({

    ticket: { type: String, required: true },


});
module.exports = new mongoose.model('ticket', schemaRegistroticket, 'tickets');