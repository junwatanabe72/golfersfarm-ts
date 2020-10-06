import axios from 'axios';
import { restfulApiConfig } from './config';

export const client = axios.create({
  baseURL: restfulApiConfig,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
});
const jwt = `Bearer ${localStorage.getItem('jwt')}`;
client.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
