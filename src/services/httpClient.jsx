import axios from 'axios';
import https from 'https';


const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL ,
    httpsAgent: new https.Agent({keepAlive:true})
  });

    

    httpClient.interceptors.request.use((config)=> {
        const token = localStorage.getItem('token');
        config.headers.Authorization =  token ? `${token}` : '';
        return config;
      });
      
export {httpClient};