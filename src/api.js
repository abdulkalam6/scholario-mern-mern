import axios from "axios";

// For production - REPLACE with your actual backend URL
const baseURL = window.location.hostname === 'localhost' 
  ? "http://localhost:5000/student"
  : "https://scho-backend.onrender.com/student"; // REPLACE WITH YOUR ACTUAL BACKEND DOMAIN

const API = axios.create({
  baseURL: baseURL,
});

export default API;