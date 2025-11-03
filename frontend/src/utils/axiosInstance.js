import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_DEV_APP_API_URL
      : import.meta.env.VITE_REACT_APP_API_URL,
  withCredentials: true,
});
