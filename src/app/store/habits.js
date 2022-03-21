import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';
import habitService from '../services/habit.service';
import localStorageService from '../services/localStorage.service';
import { updateUser } from './users';

const habitsSlice = createSlice({
  name: 'habits',
  initialState: {
    entities: [],
    isLoading: false,
    error: null
  },
  reducers: {
    habitsRequested: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    habitsRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    habitsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    habitCreationSuccess: (state, action) => {
      state.entities.push(action.payload);
    },
    habitCreationFailed: (state, action) => {
      state.error = action.payload;
    }
  }
});

const { reducer: habitsReducer, actions } = habitsSlice;

const habitCreationRequested = createAction('habits/habitCreationRequested');

const {
  habitsRequested,
  habitsRequestSuccess,
  habitsRequestFailed,
  habitCreationSuccess,
  habitCreationFailed
} = actions;

export const createHabit = (payload) => async (dispatch) => {
  dispatch(habitCreationRequested());
  try {
    const habit = {
      _id: nanoid(),
      userId: localStorageService.getUserIdToken(),
      createdAt: Date.now(),
      isActive: true,
      ...payload
    };
    const data = await habitService.create(habit);
    dispatch(habitCreationSuccess(habit));
    dispatch(updateUser(habit._id));
  } catch (error) {
    dispatch(habitCreationFailed(error.message));
  }
};

export default habitsReducer;
