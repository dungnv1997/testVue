import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Make sure JSON Server is running on port 3001
});

export default api;
