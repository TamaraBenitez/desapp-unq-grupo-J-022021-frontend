import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.API_URL});

    httpClient.interceptors.request.use((config)=> {
        const token = localStorage.getItem('token');
        config.headers.Authorization =  token ? `${token}` : '';
        return config;
      });
      

export {httpClient};