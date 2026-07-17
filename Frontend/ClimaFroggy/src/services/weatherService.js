import api from "./api"


export async function buscarClima(cidade){

    const resposta = await api.get("/weather", {

        params:{
            city:cidade
        }

    })


    return resposta.data
}