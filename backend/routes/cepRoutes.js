const router = require("express").Router()
const cepController = require("../controllers/cepController")

router.get("/:cep", cepController.buscarCep)

module.exports = router