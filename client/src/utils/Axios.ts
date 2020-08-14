import axios from 'axios';
// import { restfulApiConfig } from './config';

export const userName = 'junwatanabe72';
export const issueURL = '/repos/junwatanabe72/linux/issues';
export const issuePutURL = '/repos/junwatanabe72/linux/issues/';
export const userURL = '/users/junwatanabe72';

// export const TOKEN = restfulApiConfig.apiKey;

export const client = axios.create({
  baseURL: 'https://api.github.com',
  // auth: {
  //   username: userName,
  //   // password: TOKEN,
  // },
});
