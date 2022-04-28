const express = require('express')
const Autor = require('../models/autores.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

//Construccion del end-point para registro de usuarios

router.post('/registrar-autor', (req, res) => {
    let nuevoAutor = new Autor({

        nombre: req.body.nombre,
        fotoAutor: req.body.fotoAutor,
        premios: req.body.premios,
        resena: req.body.resena,
        detalles: req.body.detalles,
        estado: 'Activo'
    })
    nuevoAutor.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el autor',
                error
            })
        } else {
            res.json({
                msj: 'Autor registrado correctamente'
            })
        }
    })
})
router.get('/listar-autores', (req, res) => {
    Autor.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar los autores',
                error
            })
        } else {
            res.json({
                msj: 'Autores registrados correctamente',
                lista
            })
        }
    })
})
module.exports = router