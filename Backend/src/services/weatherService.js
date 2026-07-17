const axios = require("axios")

const API_KEY = process.env.WEATHER_API_KEY
const cache = {}

async function getWeather(city){

    try {

        const cidade = city.toLowerCase().trim()


       
        if(cache[cidade]){

            const tempoPassado = Date.now() - cache[cidade].tempo


            // 10 minutos
            if(tempoPassado < 600000){

                console.log("Usando cache")

                return cache[cidade].dados
            }
        }


        const response = await axios.get(
            "https://api.weatherapi.com/v1/current.json",
            {
                params:{
                    key: API_KEY,
                    q: city,
                    lang:"pt"
                }
            }
        )


        const data = response.data


        const clima = {

            cidade: data.location.name,

            temperatura: data.current.temp_c,

            sensacao: data.current.feelslike_c,

            umidade: data.current.humidity,

            vento: data.current.wind_kph,

            uv: data.current.uv,

            condicao: data.current.condition.text,

            icone: data.current.condition.icon,



        }


        // salva no cache
        cache[cidade] = {
            dados: clima,
            tempo: Date.now()
        }


        return clima



    } catch(error){

        console.log(error.response?.data || error.message)

        throw new Error("Erro ao buscar clima")
    }
}

module.exports = {
    getWeather
}