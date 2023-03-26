import axios from "axios";

const baseURL = "http://www.omdbapi.com/";

const api = axios.create({
  baseURL: baseURL,
  params: {
    apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
  },
});

export default api;
