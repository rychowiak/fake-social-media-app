import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://socialmediaapp-production-1954.up.railway.app/",
  withCredentials: true,
});
