import axios from 'axios';
import { auth } from '../config/firebase';

const api = axios.create({
  baseURL: '/api',
});

// Interceptador para adicionar o token JWT do Firebase
api.interceptors.request.use(async (config) => {
  if (auth.currentUser) {
    const token = await auth.currentUser.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
