const axios = require("axios")

exports.buscarClima = async (req, res) => {

    const { cidade } = req.params
    const apiKey = "84bcb23ec7531b52c5667a424f47da52"

    try {

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`
        )

        res.json(response.data)

    } catch (error) {

        res.status(500).json({ erro: "Erro ao buscar clima" })

    }

}
