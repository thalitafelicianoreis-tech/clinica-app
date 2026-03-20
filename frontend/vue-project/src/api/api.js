import axios from "axios"

const api = axios.create({
  baseURL: "https://clinica-app-welb.onrender.com"
})

export default api