'use strict'

const botonFoto = document.querySelector('#insertImage')
const imagen = document.querySelector('#fotoAgregar')

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dviz0qebs',
    uploadPreset: 'preset_skytech'


}, (error, result) => {
    if (!error && result && result.event === 'success') {
        console.log('Imagen subida con exito', result.info)
        imagen.src = result.info.secure_url
    }
})


botonFoto.addEventListener('click', () => {
    widget_cloudinary.open()
}, false)