const router = require("express").Router()
const climaController = require("../controllers/climaController")

router.get("/:cidade", climaController.buscarClima)

module.exports = router
