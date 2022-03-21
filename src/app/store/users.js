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
      state.dataLoaded = false;
    },
    userRequested: (state) => {
      state.isLoading = true;
      state.error = null;
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
    userCreationSuccess: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    userHabitUpdateRequested: (state) => {
      state.error = null;
      state.isLoading = true;
      if (!state.entities.habits) {
        state.entities.habits = [];
      }
    },
    userHabitUpdateSuccess: (state, action) => {
      state.entities.habits = action.payload;
      state.isLoading = false;
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
  userCreationSuccess,
  userHabitUpdateRequested,
  userHabitUpdateSuccess
} = actions;

export const getUserData = () => async (dispatch) => {
  dispatch(userRequested());
  try {
    const data = await usersService.get();
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

export const createUser = (payload) => async (dispatch) => {
  dispatch(userRequested());
  try {
    const data = await usersService.create(payload);
    dispatch(userCreationSuccess(data));
  } catch (error) {
    dispatch(userRequestFailed(error.message));
  }
};

export const updateUserHabits = (payload) => async (dispatch, getState) => {
  dispatch(userHabitUpdateRequested());
  const { users } = getState();
  try {
    const newHabits = [...users.entities.habits];
    newHabits.push(payload);
    const data = await usersService.update({
      _id: localStorageService.getUserIdToken(),
      habits: { habits: newHabits }
    });
    console.log(data, newHabits);
    dispatch(userHabitUpdateSuccess(newHabits));
  } catch (error) {
    dispatch(userRequestFailed(error.message));
  }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;

export const getUser = () => (state) => state.users.entities;

export const getIsLoading = () => (state) => state.users.isLoading;

export const getDataStatus = () => (state) => state.users.dataLoaded;

export default usersReducer;
