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
    const apiKey = import.meta.env.VITE_MURAL_API_KEY;
    if(apiKey){
      config.headers.Authorization = `Bearer ${apiKey}`
    }
    return config
  },
  (error) => Promise.reject(new ApiError(ApiErrorType.Server, { originalError: error }))
)
