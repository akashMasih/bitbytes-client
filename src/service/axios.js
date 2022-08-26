import axios from "axios";
import { config } from "./config";

const instance = axios.create({
    baseURL: config.baseUrl,
    timeout: 5000,
});


export { instance as axios }