// src/api/client.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://lavanya-backend-m39n.onrender.com", // 👈 matches server.js
});

export default api;
