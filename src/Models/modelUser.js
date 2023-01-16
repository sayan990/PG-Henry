const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    apellido: {
        type: String,
    },
    cumpleaños: {
        type: Date,
    },
    contraseña: {
        type: String,
        required: true,
        select: false
    },
    ciudad:
    {
        type: String,
    },
    pais:
    {
        type: String,
    },
    direccion:
    {
        type: String,
    },
    tarjeta:
    {
        type: Number,
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('usuarios', userSchema);