const express = require('express')
const userSchema = require('../Models/modelUser')
//const axios = require('axios')

const router = express.Router()

//Ruta de creacion de usuarios (users)
router.post('/user', (req, res) => {
    const newProduct = userSchema(req.body);
    newProduct.save()
        .then((data) => res.send(data))
        .catch((err) => res.send({ error: err }))

})

//Ruta de obtener todos los usuarios (users)
router.get('/user', (req, res) => {
    userSchema.find()
        .then((data) => res.send(data))
        .catch((e) => res.send({ error: e }))
})

//Ruta de obtener 1 usuarios especifico (user)
router.get('/user/:id', (req, res) => {
    const { id } = req.params
    userSchema
        .findById(id)
        .then((data) => res.send(data))
        .catch((e) => res.send({ message: e }));
})

// Ruta de modificar 1 usuarios especifico (user)
router.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, appelido, cumpleaños, contraseña, ciudad, pais} = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { nombre, email, appelido, cumpleaños, contraseña, ciudad, pais } })
        .then((data) => res.send(data))
        .catch((e) => res.send({ message: e }));
})

//Ruta de eliminacion de 1 usuarios especifico (user)
router.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.send(data))
        .catch((e) => res.send({ message: e }));
})

module.exports = router
