import axios from "axios";

const CORS_URL = "https://api.allorigins.win/raw?url=";
const BASE_URL = "https://api.coingecko.com/api/v3";

const fetchAPI = (url, params) => {
  try {
    const data = axios.get(BASE_URL + url, {
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default fetchAPI;
