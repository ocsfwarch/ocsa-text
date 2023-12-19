import axios, { CanceledError } from "axios";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const bearerToken = import.meta.env.VITE_APP_BEARER_TOKEN;

export default axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: bearerToken
    }
})

export { CanceledError }