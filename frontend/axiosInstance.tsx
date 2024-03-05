import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'https://minimalist-backend.onrender.com',
  timeout: 10000, 
});


// Add an interceptor to include the user ID from localStorage in the request headers
axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

// Add an interceptor to remove the Authorization header when logging out
axiosInstance.interceptors.response.use(response => {
  return response;
}, error => {
  // Handle errors
  return Promise.reject(error);
});

export const logout = () => {
  try {
      // Clear the token from localStorage
      localStorage.removeItem('token');
      // Remove the Authorization header from Axios instance
      delete axiosInstance.defaults.headers.common['Authorization'];
      // // Redirect the user to the login page or any other desired route

      window.location.href = '/login';
      console.log('logged Out')
  } catch (error) {
      console.error('Error logging out:', error);
  }
};


export default axiosInstance;
