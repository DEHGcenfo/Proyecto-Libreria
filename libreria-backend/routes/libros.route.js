const express = require('express')
const Libro = require('../models/libros.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

//Construccion del end-point para registro de usuarios

router.post('/registrar-libro', (req, res) => {
    let nuevoLibro = new Libro({
        foto: req.body.foto,
        titulo: req.body.titulo,
        resenna: req.body.resenna,
        isbn: req.body.isbn,
        fechaPublicacion: req.body.fechaPublicacion,
        editorial: req.body.editorial,
        premios: req.body.premios,
        idioma: req.body.idioma,
        generosLiterarios: req.body.generosLiterarios,
        formato: req.body.formato,
        autor: req.body.autor,
        precio: req.body.precio

    })
    nuevoLibro.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo agregar libro correctamente',
                error
            })
        } else {
            res.json({
                msj: 'Libro agregado correctamente'
            })
        }
    })
})
router.get('/listar-libros', (req, res) => {
    Libro.find((error, lista) => {
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

router.get('/listar-libros-por-correo', (req, res) => {
    let correoUsuario = req.query.correo;
    Libro.find({ correo: correoUsuario }, (error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar los libros en el carrito',
                error
            });
        } else {
            res.json({
                lista
            });
        }
    });
});
module.exports = router