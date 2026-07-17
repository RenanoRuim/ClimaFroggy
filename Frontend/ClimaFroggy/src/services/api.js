import axios from "axios"


const api = axios.create({

    baseURL:"http://localhost:1250"

})


export default api