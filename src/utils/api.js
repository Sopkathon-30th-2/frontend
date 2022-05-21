import axios from 'axios';

const API = axios.create({
  baseURL: 'https://asia-northeast3-sopkathon-a7a6f.cloudfunctions.net/app',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default API;
