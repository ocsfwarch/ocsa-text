import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: 'http://localhost:5000/textcard'
})

export { CanceledError }