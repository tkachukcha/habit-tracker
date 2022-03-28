import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';
import habitService from '../services/habit.service';
import localStorageService from '../services/localStorage.service';

const habitsSlice = createSlice({
  name: 'habits',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
    dataLoaded: false
  },
  reducers: {
    habitsRequested: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    habitsRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    habitsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    habitCreationSuccess: (state, action) => {
      const newEntities = [...state.entities];
      newEntities.push(action.payload);
      state.entities = [...newEntities];
    },
    habitCreationFailed: (state, action) => {
      state.error = action.payload;
    },
    habitUpdateSuccess: (state, action) => {
      const newEntities = [...state.entities];
      const index = newEntities.findIndex((i) => i._id === action.payload._id);
      newEntities[index] = { ...state.entities, ...action.payload.values };
      state.entities = [...newEntities];
    },
    habitUpdateFailed: (state, action) => {
      state.error = action.payload;
    }
  }
});

const { reducer: habitsReducer, actions } = habitsSlice;

const habitCreationRequested = createAction('habits/habitCreationRequested');
const habitUpdateRequested = createAction('habits/habitUpdateRequested');

const {
  habitsRequested,
  habitsRequestSuccess,
  habitsRequestFailed,
  habitCreationSuccess,
  habitCreationFailed,
  habitUpdateSuccess,
  habitUpdateFailed
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
  } catch (error) {
    dispatch(habitCreationFailed(error.message));
  }
};

export const getUserHabits = () => async (dispatch) => {
  dispatch(habitsRequested);
  const userId = localStorageService.getUserIdToken();
  try {
    const data = await habitService.fetchAll();
    const userHabits = Object.values(data).filter(
      (habit) => habit.userId === userId && habit.isActive
    );
    dispatch(habitsRequestSuccess(userHabits));
  } catch (error) {
    dispatch(habitsRequestFailed(error.message));
  }
};

export const getHabitDataStatus = () => (state) => state.habits.dataLoaded;

export const getHabits = () => (state) => state.habits.entities;

export default habitsReducer;
