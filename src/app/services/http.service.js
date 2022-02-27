import axios from 'axios';
import { toast } from 'react-toastify';
import configFile from '../../config.json';
import { httpAuth } from '../hooks/useAuth';
import localStorageService from './localStorage.service.js';

const http = axios.create({
  baseURL:
    'https://habit-tracker-cb7ea-default-rtdb.europe-west1.firebasedatabase.app/'
});

http.interceptors.request.use(
  async function (config) {
    const containSlash = /\/$/gi.test(config.url);
    config.url =
      (containSlash ? config.url.slice(0, -1) : config.url) + '.json';
    const expiresDate = localStorageService.getExpiresToken();
    const refreshToken = localStorageService.getRefreshToken();
    if (refreshToken && expiresDate < Date.now()) {
      const { data } = await httpAuth.post('token', {
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      });
      localStorageService.setTokens({
        refreshToken: data.refresh_token,
        idToken: data.id_token,
        expiresDate: data.expires_in,
        localId: data.user_id
      });
    }
    const accessToken = localStorageService.getAccessToken();
    if (accessToken) {
      config.params = {
        ...config.params,
        auth: accessToken
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.request.status < 500;

    if (!expectedErrors) {
      console.log(error);
      toast.error('Something went wrong');
    }
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch
};

export default httpService;
