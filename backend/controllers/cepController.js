const axios = require("axios")

exports.buscarCep = async(req,res)=>{

const {cep} = req.params

const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

res.json(response.data)
}