import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  // baseURL: 'https://minimalist-backend.onrender.com',
  timeout: 5000, 
});


// Add an interceptor to include the user ID from localStorage in the request headers
axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
