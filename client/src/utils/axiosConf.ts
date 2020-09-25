import axios from 'axios';
import { restfulApiConfig } from './config';
// export const TOKEN = restfulApiConfig.apiKey;

export const client = axios.create({
  baseURL: restfulApiConfig,
});

export const authClient = axios.create({
  baseURL: restfulApiConfig,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
});
