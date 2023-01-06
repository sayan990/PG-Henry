const express = require('express');
const { model } = require('mongoose');
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
router.get('/zapatillas', async (req, res) => {
    let { modelo } = req.query;
    try {
        if (modelo && modelo !== '') {
            const zapatillas = await zapSchema.find();
            const zapasFiltradas = zapatillas.filter(obj => obj.modelo.toLowerCase().includes(modelo.toLowerCase()));
            if (zapasFiltradas?.length) return res.status(200).send(zapasFiltradas);
            else return res.status(404).send(`El modelo "${modelo}" no existe.`);
        }
        var allzapatillas = await zapSchema.find();
        res.send(allzapatillas);
    } catch (error) {
        console.log(error.message);
        res.send({ msg: error.message });
    }

})
// router.get('/zapatillas', (req, res) => {
//     zapSchema.find()
//         .then((data) => res.send(data))
//         .catch((e) => res.send({ error: e }))
// })

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
