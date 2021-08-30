import * as axios from "axios"

const instance = axios.create({
  widthCredentials: true,
  baseURL: "http://localhost:9000",
})

export default instance
