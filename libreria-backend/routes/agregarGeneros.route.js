const express = require('express')
const Genero = require('../models/agregarGeneros.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

//Construccion del end-point para registro de usuarios

router.post('/registrar-genero', (req, res) => {
    let nuevoGenero = new Genero({
        nombreGenero: req.body.nombreGenero,
        IdGenero: req.body.IdGenero,
    })

    nuevoGenero.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el genero literario',
                error
            })
        } else {
            res.json({
                msj: 'Genero literario correctamente'
            })
        }
    })
})
router.get('/listar-genero', (req, res) => {
    Genero.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar el genero',
                error
            })
        } else {
            res.json({
                msj: 'No se pudo listar el genero',
                lista
            })
        }
    })
})
module.exports = router