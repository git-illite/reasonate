import axios from "axios";

console.log("axios log: ", import.meta.env.VITE_API_URL);
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default instance;
