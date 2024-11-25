import axios from "axios";

const API = axios.create({ baseURL: "https://loan-app-arb7.onrender.com" });

// Add Authorization Header
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
