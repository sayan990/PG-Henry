const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const routeProducts = require('./Routes/routeProducts.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use('/products', routeProducts)

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('conectado a mongo'))
.catch((e) => console.log(e))

app.listen(port, console.log(`listening port ${port}`))