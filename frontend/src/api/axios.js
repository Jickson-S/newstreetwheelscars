import axios from "axios";

let base = import.meta.env.VITE_API_URL || "http://localhost:5001/api";
if (base.endsWith("/")) {
  base = base.slice(0, -1);
}

export const API_URL = base.endsWith("/api") ? base : `${base}/api`;
export const BACKEND_URL = API_URL.slice(0, -4);

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