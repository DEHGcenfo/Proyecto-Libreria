const express = require('express')
const Usuario = require('../models/usuarios.model')
    // router permite redireccionar la direcciones que vienen desde el front-end
const router = express.Router()

//Construccion del end-point para registro de usuarios

router.post('/registrar-usuario', (req, res) => {
    let nuevoUsuario = new Usuario({

        tipoUsuario: req.body.tipoUsuario,
        nombre: req.body.nombre,
        correo: req.body.correo,
        genero: req.body.genero,
        tipoId: req.body.tipoId,
        numeroId: req.body.numeroId,
        provincia: req.body.provincia,
        canton: req.body.canton,
        distrito: req.body.distrito,
        direccionExacta: req.body.direccionExacta,
        contrasenna: req.body.contrasenna,
        estado: 'Activo'
    })
    nuevoUsuario.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el usuario',
                error
            })
        } else {
            res.json({
                msj: 'Usuario registrado correctamente'
            })
        }
    })
})
router.get('/listar-usuarios', (req, res) => {
    Usuario.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar los usuarios',
                error
            })
        } else {
            res.json({
                msj: 'Usuarios registrados correctamente',
                lista
            })
        }
    })
})
module.exports = router