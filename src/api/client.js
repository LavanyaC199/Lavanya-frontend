// src/api/client.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // example
});

export default api;

