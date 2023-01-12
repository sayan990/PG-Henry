const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const routeProducts = require('./Routes/routeProducts.js')
const routeUsers = require ('./Routes/routeUsers.js')
const routeFilters = require('./Routes/routeFilters.js')
const routeOrders = require ('./Routes/orderRoutes.js')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/productos', routeProducts);
app.use('/productos/filtros', routeFilters);
app.use('/usuarios', routeUsers);
app.use('/pedido', routeOrders);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('conectado a mongo'))
    .catch((e) => console.log(e))

app.listen(port, console.log(`listening port ${port}`))