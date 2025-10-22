import axios from 'axios';

// Usa variable de entorno para cambiar entre local y producción
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
});

// Interceptor para añadir token automáticamente
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('token');
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  (error) => Promise.reject(error)
);

// Endpoints
export const login = (data) => API.post('/login', data);
export const simulate = (data) => API.post('/simulate', data);
export const generateExercise = (algo) => API.post('/exercise', { algorithm: algo });