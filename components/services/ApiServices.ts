import axios from 'axios';

export const ApiServices = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'content-Type': 'application/json',
    }
})