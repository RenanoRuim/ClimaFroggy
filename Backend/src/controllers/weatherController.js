const weatherService = require("../services/weatherService")


async function weather(req, res){

    const { city } = req.query

    if(!city){
        return res.status(400).json({
            message: "Informe uma cidade"
        })
    }

    try {

        const clima = await weatherService.getWeather(city)

        res.json(clima)

    } catch(error){

        res.status(500).json({
            message: error.message
        })

    }
}


module.exports = {
    weather
}