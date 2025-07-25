import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/", // sua API backend
  timeout: 5000
});

export default api;
