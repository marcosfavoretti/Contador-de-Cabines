import axios from "axios"
const axioscli = axios.create({
    baseURL: "http://192.168.4.16:3000"
})

export default axioscli