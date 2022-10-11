import axios from 'axios'

const BASE_URL = "http://123.207.32.32:1888/api"
const TIME_OUT = 10000
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})

export { instance as axios }