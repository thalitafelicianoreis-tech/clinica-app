const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {

    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ mensagem: "Dados incorreto" })
    }

    try {

        const decoded = jwt.verify(token, "segredo")

        req.user = decoded

        next()

    } catch (error) {

        return res.status(401).json({ mensagem: "Token inválido" })

    }

}
