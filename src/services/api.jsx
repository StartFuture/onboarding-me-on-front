import axios from "axios";

const api = axios.create({
    baseURL: "https://api.onboarding-on.startfuture.com.br/"
})

export default api;


