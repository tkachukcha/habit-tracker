import { createAction, createSlice } from '@reduxjs/toolkit';
import localStorageService from '../services/localStorage.service';
import authService from '../services/auth.service';
import history from '../utils/history';
import usersService from '../services/users.service';

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserIdToken() },
      isLoggedIn: true,
      dataLoaded: false
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false
    };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    authRequested: (state) => {
      state.error = null;
    },
    authRequestSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.auth = action.payload;
    },
    authRequestFail: (state, action) => {
      state.error = action.payload;
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.auth = null;
      state.isLoggedIn = false;
    },
    userRequested: (state) => {
      state.isLoading = true;
    },
    userRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    userRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    userCreated: (state, action) => {
      state.entities = action.payload;
    },
    userCreationFailed: (state, action) => {
      state.error = action.payload;
    }
  }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  authRequested,
  authRequestSuccess,
  authRequestFail,
  userLoggedOut,
  userRequested,
  userRequestSuccess,
  userRequestFailed,
  userCreated,
  userCreationFailed
} = actions;

const userCreationRequested = createAction('users/userCreationRequested');

export const getUserData = () => async (dispatch) => {
  dispatch(userRequested());
  try {
    const data = await usersService.getUser();
    dispatch(userRequestSuccess(data));
  } catch (error) {
    dispatch(userRequestFailed(error.message));
  }
};

export const register = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.register(payload);
    dispatch(authRequestSuccess({ userId: data.localId }));
    localStorageService.setTokens(data);
    dispatch(
      createUser({
        _id: data.localId,
        email: payload.email,
        name: payload.name,
        habits: []
      })
    );
    history.push('/');
  } catch (error) {
    dispatch(authRequestFail(error.message));
  }
};

export const createUser = (payload) => async (dispatch) => {
  dispatch(userCreationRequested());
  try {
    const data = await usersService.create(payload);
    dispatch(userCreated(data));
  } catch (error) {
    dispatch(userCreationFailed(error.message));
  }
};

export const login =
  ({ payload, redirect }) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.login(payload);
      dispatch(authRequestSuccess({ userId: data.localId }));
      localStorageService.setTokens(data);
      dispatch(getUserData());
      history.push('/');
    } catch (error) {
      dispatch(authRequestFail(error.message));
    }
  };

export const logout = () => (dispatch) => {
  dispatch(userLoggedOut());
  localStorageService.removeAuthData();
  history.push('/');
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;

export const getUser = () => (state) => state.users.entities;

export const getDataLoaded = () => (state) => state.users.dataLoaded;

export default usersReducer;
