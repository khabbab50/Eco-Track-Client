import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Axios interceptor to attach Firebase token for protected routes
api.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem("firebaseToken"); // assume stored after login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
