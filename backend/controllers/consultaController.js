const Consulta = require("../models/consulta")

exports.agendarConsulta = async (req,res)=>{

  const { paciente, data, horario, usuarioId } = req.body

  try{

    const consultaExistente = await Consulta.findOne({
      data: data,
      horario: horario
    })

    if(consultaExistente){
      return res.status(400).json({
        mensagem:"Horário já ocupado"
      })
    }

    const novaConsulta = new Consulta({
      paciente,
      data,
      horario,
      usuarioId
    })

    await novaConsulta.save()

    res.json(novaConsulta)

  }catch(error){
    res.status(500).json({
      erro:"Erro ao salvar consulta"
    })
  }
}

exports.listarConsultas = async (req,res)=>{

  try{

    const consultas = await Consulta.find()

    res.json(consultas)

  }catch(error){

    res.status(500).json({
      erro:"Erro ao buscar consultas"
    })
  }
}

exports.listarConsultasPorUsuario = async (req,res)=>{

  try{

    const consultas = await Consulta.find({
      usuarioId: req.params.usuarioId
    })

    res.json(consultas)

  }catch(error){

    console.error(error)

    res.status(500).json({
      erro:"Erro ao buscar consultas"
    })
  }
}