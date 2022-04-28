const express = require('express')
const Mensaje = require('../models/contacto.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

//Construccion del end-point para registro de usuarios

router.post('/registrar-mensaje', (req, res) => {
    let nuevoMensaje = new Mensaje({
        nombre: req.body.nombre,
        correo: req.body.correo,
        mensaje: req.body.mensaje,


    })
    nuevoMensaje.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo enviar el mensaje',
                error
            })
        } else {
            res.json({
                msj: 'Enviado'
            })
        }
    })
})
module.exports = router