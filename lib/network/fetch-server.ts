import axios from "axios";

export const fetchServer = axios.create({
    baseURL: process.env.NEXT_API_BASE_URL,
});