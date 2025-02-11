import axios from "axios";
import { ApiError, ApiErrorType } from "../../types/api";

const BASE_URL = 'https://api-staging.muralpay.com/api';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(new ApiError(ApiErrorType.Server, { originalError: error }))
)
