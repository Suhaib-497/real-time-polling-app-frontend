import axios from 'axios';

const axiosClient=axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
    
     headers: {
    'Content-Type': 'application/json',
  },


})

axiosClient.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  if (token) {
    token = token.trim(); // remove hidden spaces/newlines
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



export default axiosClient;