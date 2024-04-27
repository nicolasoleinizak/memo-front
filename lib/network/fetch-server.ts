import axios from "axios";

export const fetchServer = axios.create({
    baseURL: process.env.NEXT_API_BASE_URL,
    headers: {
        'X-API-KEY': process.env.NEXT_API_KEY,
    }
});