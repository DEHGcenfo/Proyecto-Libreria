const express = require('express')
const parametro = require('../models/editarParametros.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

//Construccion del end-point para registro de usuarios

router.post('/registrar-parametro', (req, res) => {
    let nuevoParametro = new parametro({

        Impuesto: req.body.Impuesto,
        minimoCompras: req.body.minimoCompras,
        costoEnvio: req.body.costoEnvio,
        Tarifa1: req.body.Tarifa1,
        Tarifa2: req.body.Tarifa2,
        Tarifa3: req.body.Tarifa3,
        Tarifa4: req.body.Tarifa4,

    })
    nuevoParametro.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el parametro',
                error
            })
        } else {
            res.json({
                msj: 'parametro registrado correctamente'
            })
        }
    })
})
router.get('/listar-parametros', (req, res) => {
    Parametro.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar lo parametros',
                error
            })
        } else {
            res.json({
                msj: 'parametros registrados correctamente',
                lista
            })
        }
    })
})
module.exports = router