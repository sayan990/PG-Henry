const express = require('express')
const zapSchema = require('../Models/modelProducts.js')
//const axios = require('axios')

const router = express.Router()

//Ruta de creacion de productos (zapatillas)
router.post('/zapatillas', (req, res) => {
    const newProduct = zapSchema(req.body);
    newProduct.save()
        .then((data) => res.send(data))
        .catch((err) => res.send({ error: err }))

})

//Ruta de obtener todos los productos (zapatillas)
router.get('/zapatillas', (req, res) => {
    zapSchema.find()
        .then((data) => res.send(data))
        .catch((e) => res.send({ error: e }))
})

//Ruta de obtener 1 producto especifico (zapatilla)
router.get('/zapatillas/:id', (req, res) => {
    const { id } = req.params
    zapSchema
        .findById(id)
        .then((data) => res.send(data))
        .catch((e) => res.send({ message: e }));
})

// Ruta de modificar 1 producto especifico (zapatilla)
router.put('/zapatillas/:id', (req, res) => {
    const { id } = req.params;
    const { actividad, color, imagen1, imagen2, imagen3, marca, modelo, precio, talles } = req.body;
    zapSchema
        .updateOne({ _id: id }, { $set: { actividad, color, imagen1, imagen2, imagen3, marca, modelo, precio, talles } })
        .then((data) => res.send(data))
        .catch((e) => res.send({ message: e }));
})

//Ruta de eliminacion de 1 producto especifico (zapatilla)
router.delete('/zapatillas/:id', (req, res) => {
    const { id } = req.params;
    zapSchema
        .remove({ _id: id })
        .then((data) => res.send(data))
        .catch((e) => res.send({ message: e }));
})

module.exports = router
