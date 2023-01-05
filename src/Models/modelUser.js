const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre : {
        type: String,
        // // require: true,
    },
    email: {
        type: String,
        // // require: true,,
        unique: true,
        lowercase: true,
    },
    apellido: {
        type: String,
        // require: true,
    },
    cumpleaños: {
        type: Date,
        // require: true,
    },
    contraseña:{
        type: String,
        select:false
    },
    ciudad:
    {type: String,
    // require: true,
},
pais:
    {
    type: String,
    // require: true,
},
direccion:
{
type: String,
require: true
},
tarjeta:
    {
    type: Number,
    require: false
},

   
   
    
})

module.exports = mongoose.model('usuarios', userSchema)