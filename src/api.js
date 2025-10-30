import axios from "axios";

const API = axios.create({
  baseURL: "https://scho-backend.onrender.com/student",
});

export default API;