const mongoose = require("mongoose")

const ConsultaSchema = new mongoose.Schema({

paciente:{
type:String,
required:true
},

data:{
type:String,
required:true
},

horario:{
type:String,
required:true
},

usuarioId:{   
type:String,
required:true
},

criadoEm:{
type:Date,
default:Date.now
}


})

module.exports = mongoose.model("Consulta", ConsultaSchema)
