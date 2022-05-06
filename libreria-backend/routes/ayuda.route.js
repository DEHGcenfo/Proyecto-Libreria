const express = require('express')
const ticket = require('../models/ayuda.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

//Construccion del end-point para registro de usuarios

router.post('/registrar-ticket', (req, res) => {
    let nuevoTicket = new ticket({

        ticket: req.body.ticket,

    })
    nuevoTicket.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el ticket',
                error
            })
        } else {
            res.json({
                msj: 'Ticket registrado correctamente'
            })
        }
    })
})
router.get('/listar-ticket', (req, res) => {
    ticket.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar el ticket',
                error
            })
        } else {
            res.json({
                msj: 'Ticket registrados correctamente',
                lista
            })
        }
    })
})
module.exports = router