import axios from "axios";

//09760180/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/",
});

export default api;