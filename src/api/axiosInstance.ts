import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ce965d48-0f0d-4dbd-a6dd-6446daa3c846',
  },
});
