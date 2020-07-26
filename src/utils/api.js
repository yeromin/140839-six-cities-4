import axios from 'axios';

const createAPI = axios.create({
  baseURL: `https://4.react.pages.academy/six-cities`,
  timeout: 5000,
  withCredentials: true,
});

export default createAPI;
