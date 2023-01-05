import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://socialmediaapp-production-1954.up.railway.app/api",
  withCredentials: true,
});
