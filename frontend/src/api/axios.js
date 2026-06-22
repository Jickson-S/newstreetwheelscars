import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";
export const BACKEND_URL = API_URL.endsWith("/api") ? API_URL.slice(0, -4) : API_URL;

const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default api;