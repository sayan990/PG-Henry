const express = require('express')
const mongoose = require('mongoose')
const mercadopago = require('mercadopago')
require('dotenv').config()
const routeProducts = require('./Routes/routeProducts.js')
const routeUsers = require ('./Routes/routeUsers.js')
const routeFilters = require('./Routes/routeFilters.js')



const app = express()
const port = process.env.PORT || 3001

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

mercadopago.configure({
    access_token: 'APP_USR-5518288478784372-011316-fa53d3454cf122dcfff6a94f697d715c-1286671264'
});

app.use('/products', routeProducts, routeUsers)
app.use('/products/filtros', routeFilters)

//Esto es una prueba del payment con mercadopago
app.post('/payment', (req, res) => {
    const product = req.body
    let preference = {
        items: [{
            id: 123,             //En nuestro caso seria el id del producto/zapatilla
            modelo: product.title, //En nuestro caso seria el modelo de la zapatilla
            imagen: product.imagen, //En nuestro caso seria la imagen del producto
            color: product.color,
            talla: product.talla,
            marca: product.marca,
            unit_price: product.precio,
            descripcion: product.descripcion,
            quantity: product.cantidad,
            currency: 'ARS',
        }],
        back_urls: {
            success: 'http:localhost:3001/products/zapatillas',
            failure: '',
            pending: '',
        },
        auto_return: 'approved',
        binary_mode: true,
    }

    mercadopago.preferences.create(preference).then((response) => res.status(200).send({response})).catch((error) => res.status(400).send({error: error.message}));
})




mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('conectado a mongo'))
    .catch((e) => console.log(e))

app.listen(port, console.log(`listening port ${port}`))