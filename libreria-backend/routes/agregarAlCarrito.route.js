const express = require('express')
const Agregar = require('../models/agregarAlCarrito.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

router.post('/registrar-compra', (req, res) => {
    let nuevoAgregar = new Agregar({

        titulo: req.body.titulo,

        isbn: req.body.isbn,

        idioma: req.body.idioma,

        formato: req.body.formato,
        autor: req.body.autor,
        precio: req.body.precio,
        estado: 'Activo'

    })
    nuevoAgregar.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo agregar el libro correctamente',
                error
            })
        } else {
            res.json({
                msj: 'Libro agregado correctamente'
            })
        }
    })
})

router.get('/listar-compra', (req, res) => {
    Agregar.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar los Agregars',
                error
            })
        } else {
            res.json({
                msj: 'Agregars agregados correctamente',
                lista
            })
        }
    })
})
module.exports = router