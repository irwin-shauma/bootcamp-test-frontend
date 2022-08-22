import axios from 'axios'

const instance = axios.create();

// Request interceptor
instance.interceptors.request.use(function (config){
    config.headers.authorization = 'number here'
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Response interceptor
instance.interceptors.response.use(function (response) {
    return response;
}, function (error){
    return Promise.reject(error);
});

export default instance
