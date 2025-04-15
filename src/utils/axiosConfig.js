import axios from 'axios';

// Create an axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api', // Your backend base URL
  withCredentials: true, // Allows sending cookies cross-origin
  headers: {
    'Content-Type': 'application/json',
    // You can add other default headers here
  }
});

export default axiosInstance;