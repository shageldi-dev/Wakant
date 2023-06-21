import axios from "axios";

export const BASE_URL = "http://wakant.com.tm/api/v1/";
const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${window.localStorage.getItem('token')}`
  },
});
// http://216.250.8.128:6425/getpost
export { AxiosInstance };
