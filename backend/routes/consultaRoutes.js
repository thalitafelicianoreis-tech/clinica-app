const router = require("express").Router()
const consultaController = require("../controllers/consultaController")

router.post("/agendar", consultaController.agendarConsulta)


router.get("/listar", consultaController.listarConsultas)


router.get("/listar/:usuarioId", consultaController.listarConsultasPorUsuario)

router.get("/teste", (req,res)=>{
  res.send("Rota funcionando")
})

module.exports = router