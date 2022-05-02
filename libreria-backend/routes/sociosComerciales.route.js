const express = require('express')
const SocioComercial = require('../models/sociosComerciales.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

//Construccion del end-point para registro de usuarios

router.post('/registrar-sociosComerciales', (req, res) => {
    let nuevoSocioComercial = new SocioComercial({


        nombreSocio: req.body.nombreSocio,
        ubicacionSocio: req.body.ubicacionSocio,
        telefonoSocio: req.body.telefonoSocio


    })
    nuevoSocioComercial.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el socio comercial',
                error
            })
        } else {
            res.json({
                msj: 'Socio comercial registrado correctamente'
            })
        }
    })
})
router.get('/listar-sociosComerciales', (req, res) => {
    SocioComercial.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar el socio comercial',
                error
            })
        } else {
            res.json({
                msj: 'Socio comercial registrado correctamente',
                lista
            })
        }
    })
})
module.exports = router