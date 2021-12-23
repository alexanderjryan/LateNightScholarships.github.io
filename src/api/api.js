import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://w4xhjcggi0.execute-api.us-east-1.amazonaws.com',
    // baseURL: 'http://127.0.0.1:5000',
});

export default httpClient;