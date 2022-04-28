const express = require('express')
const PuntoDeRetiro = require('../models/puntosDeRetiro.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

//Construccion del end-point para registro de usuarios

router.post('/registrar-puntosDeRetiro', (req, res) => {
    let nuevoPuntoDeRetiro = new PuntoDeRetiro({

        nombre: req.body.nombre,
        provincia: req.body.provincia,
        direccionExacta: req.body.direccionExacta,
        ubicacionMapa: req.body.ubicacionMapa,
        telefono: req.body.telefono,
        correo: req.body.correo

    })
    nuevoPuntoDeRetiro.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo agregar el punto de retiro correctamente',
                error
            })
        } else {
            res.json({
                msj: 'Punto de retiro agregado correctamente'
            })
        }
    })
})
router.get('/listar-puntosDeRetiro', (req, res) => {
    puntoDeRetiro.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar los puntos de retiro',
                error
            })
        } else {
            res.json({
                msj: 'Puntos de retiro agregados correctamente',
                lista
            })
        }
    })
})
module.exports = router