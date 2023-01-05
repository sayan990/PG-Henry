const mongoose = require('mongoose')

const zapSchema = mongoose.Schema({
    actividad: {
        type: String,
        require: true
    },
    color: {
        type: Array,
        require: true
    },
    imagen1: {
        type: String,
        require: true
    },
    imagen2: {
        type: String,
        require: true
    },
    imagen3: {
        type: String,
        require: true
    },
    marca: {
        type: String,
        require: true
    },
    modelo: {
        type: String,
        require: false
    },
    precio: {
        type: Number,
        require: true
    },
    talles: {
        type: Array,
        require: true
    },

})

module.exports = mongoose.model('zapatillas', zapSchema)