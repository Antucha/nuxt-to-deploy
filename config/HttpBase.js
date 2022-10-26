import axios from 'axios';

export const PARAMETERS = {
  loginSession: process.env.loginSession,
  sessionUrl: process.env.sessionUrl,
  url: process.env.url,
  baseUrl: process.env.baseUrl,
  // baseUrl: process.env.baseUrlLocal,
  assetsURL: process.env.assetsURL
};

export const HTTP = axios.create({
  baseURL: PARAMETERS.baseUrl,
});
