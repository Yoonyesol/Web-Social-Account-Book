import axios from "axios";
import { API_BASE_URL } from "../constants";

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default API;
