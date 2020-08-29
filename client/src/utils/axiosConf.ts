import axios from 'axios';
import { restfulApiConfig } from './config';
// export const TOKEN = restfulApiConfig.apiKey;

export const client = axios.create({
  baseURL: restfulApiConfig,
});
