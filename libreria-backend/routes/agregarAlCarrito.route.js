const express = require('express')
const Agregar = require('../models/agregarAlCarrito.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

router.post('/registrar-compra', (req, res) => {
    let nuevoAgregar = new Agregar({
        //datos: req.body.datos,
        correo: req.body.correo,
        titulo: req.body.titulo,
        foto: req.body.src,
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
    let correoUsuario = req.query.correo;
    Agregar.find({ correo: correoUsuario }, (error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar los libros',
                error
            })
        } else {
            res.json({
                msj: 'Libros agregados correctamente',
                lista
            })
        }
    })
})
module.exports = router