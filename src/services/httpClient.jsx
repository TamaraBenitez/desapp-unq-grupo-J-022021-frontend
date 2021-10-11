import axios from 'axios';
import https from 'https';
import { useHistory } from 'react-router-dom';

const httpClient = axios.create({
    baseURL: process.env.API_URL,
    httpsAgent: new https.Agent({keepAlive:true})
  });

    const history =useHistory()

    httpClient.interceptors.request.use((config)=> {
        const token = localStorage.getItem('token');
        config.headers.Authorization =  token ? `${token}` : '';
        return config;
      });
      
      httpClient.interceptors.response.use(
        (response) => {
          return response;
        },
        async(error) =>{
          const originalRequest = error.config;
              
          if (error.response !==undefined && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            history.push("/login");
          }
        })    

export {httpClient};