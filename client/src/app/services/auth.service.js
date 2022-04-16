import axios from 'axios';
import localStorageService from './localStorage.service';
import config from '../../config.json';

/* FireBase auth */
// const httpAuth = axios.create({
//   baseURL: 'https://identitytoolkit.googleapis.com/v1/',
//   params: {
//     key: process.env.REACT_APP_FIREBASE_KEY
//   }
// });

const httpAuth = axios.create({
  baseURL: config.mongoEndpoint + 'auth/'
});

const authService = {
  register: async ({ email, password }) => {
    const { data } = await httpAuth.post('signUp', {
      email,
      password
    });
    return data;
  },
  login: async ({ email, password }) => {
    const { data } = await httpAuth.post('signInWithPassword', {
      email,
      password
    });
    return data;
  },
  refresh: async () => {
    const { data } = await httpAuth.post('token', {
      grant_type: 'refresh_token',
      refresh_token: localStorageService.getRefreshToken()
    });
    return data;
  }
};
export default authService;
