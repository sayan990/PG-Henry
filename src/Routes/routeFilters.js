const express = require('express');
const zapSchema = require('../Models/modelProducts.js');

const router = express.Router();

//Ruta para filtrar de manera combinada las zapatillas por talla, actividad y precio
router.get('', async (req, res) => {

    const products = await zapSchema.find();
    const { precio, talla, actividad } = req.query;
    let filterProducts = []

    if (precio && talla && actividad) {
        products.forEach((e) => {
            if (e.precio <= precio && e.talles.find(e => e == talla) && e.actividad.toLowerCase() == actividad.toLocaleLowerCase()) {
                filterProducts.push(e)
            }
        })
        return res.send(filterProducts);

    };
    if (precio && talla) {
        products.forEach((e) => {
            if (e.precio <= precio && e.talles.find(e => e == talla)) {
                filterProducts.push(e)
            }
        })
        return res.send(filterProducts);
    };
    if (precio && actividad) {
        products.forEach((e) => {
            if (e.precio <= precio && e.actividad.toLowerCase() == actividad.toLocaleLowerCase()) {
                filterProducts.push(e)
            }
        })
        return res.send(filterProducts);
    };
    if (talla && actividad) {
        products.forEach((e) => {
            if (e.talles.find(e => e == talla) && e.actividad.toLowerCase() == actividad.toLocaleLowerCase()) {
                filterProducts.push(e)
            }
        })
        return res.send(filterProducts);
    };
    if (precio) {
        products.forEach((e) => {
            if (e.precio <= precio) {
                filterProducts.push(e)
            }
        })
        return res.send(filterProducts);
    };
    if (talla) {
        products.forEach((e) => {
            if (e.talles.find(e => e == talla)) {
                filterProducts.push(e)
            }
        })
        res.send(filterProducts);
    };
    if (actividad) {
        products.forEach((e) => {
            if (e.actividad.toLowerCase() == actividad.toLocaleLowerCase()) {
                filterProducts.push(e)
            }
        })
        return res.send(filterProducts);
    };
});

module.exports = router