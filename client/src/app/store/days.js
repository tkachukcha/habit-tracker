import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';
import dayService from '../services/day.service';
import localStorageService from '../services/localStorage.service';
import habitStatusService from '../services/habitStatus.service';
import dayjs from 'dayjs';
import { getUserData } from './users';

const daysSlice = createSlice({
  name: 'days',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
    dataLoaded: false
  },
  reducers: {
    daysRequested: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    daysRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    daysRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    dayCheckSuccess: (state, action) => {
      const day = state.entities.find((day) => day._id === action.payload._id);
      if (!day) {
        state.entities.push(action.payload);
      }
    },
    dayCheckFailed: (state, action) => {
      state.error = action.payload;
    },
    dayUpdateSuccess: (state, action) => {
      const index = state.entities.findIndex(
        (day) => day.date === action.payload.date
      );
      state.entities[index].isPerfect = action.payload.isPerfect;
    },
    dayUpdateFailed: (state, action) => {
      state.error = action.payload;
    },
    habitStatusUpdateSuccess: (state, action) => {
      const newEntities = [...state.entities];
      const day = newEntities.find((day) => day.date === action.payload.date);
      const status = day.habitStatuses.find(
        (status) => status._id === action.payload._id
      );
      status.isCompleted = action.payload.isCompleted;
    },
    habitStatusUpdateFailed: (state, action) => {
      state.error = action.payload;
    },
    habitStatusAdded: (state, action) => {
      const dayIndex = state.entities.findIndex(
        (day) => day.date === action.payload.date
      );
      const newEntities = [...state.entities];
      newEntities[dayIndex].habitStatuses.push(action.payload);
      newEntities[dayIndex].habitStatusId.push(action.payload._id);
      state.entities = [...newEntities];
    }
  }
});

const { reducer: daysReducer, actions } = daysSlice;

const dayCheckRequested = createAction('days/dayCheckRequested');
const dayUpdateRequested = createAction('days/dayUpdateRequested');
const habitStatusAddedRequested = createAction(
  'days/habitStatusAddedRequested'
);
const habitStatusUpdateRequested = createAction(
  'days/habitStatusUpdateRequested'
);

const {
  daysRequested,
  daysRequestSuccess,
  daysRequestFailed,
  dayCheckSuccess,
  dayCheckFailed,
  dayUpdateSuccess,
  dayUpdateFailed,
  habitStatusUpdateSuccess,
  habitStatusUpdateFailed,
  habitStatusAdded
} = actions;

// Days

export const checkDay = (payload) => async (dispatch) => {
  dispatch(dayCheckRequested());
  try {
    const data = await dayService.create({ date: payload });
    await dispatch(dayCheckSuccess(data));
    dispatch(getUserData());
  } catch (error) {
    dispatch(dayCheckFailed(error.message));
  }
};

export const updateDay = (payload) => async (dispatch) => {
  dispatch(dayUpdateRequested());
  try {
    await dayService.update(payload);
    dispatch(dayUpdateSuccess(payload));
  } catch (error) {
    dispatch(dayUpdateFailed(error.message));
  }
};

export const checkIfPerfect = (payload) => async (dispatch, getState) => {
  const state = getState();
  const day = state.days.entities.find((day) => day.date === payload);
  const isPerfect = day.habitStatuses.every(
    (status) => status.isCompleted === true
  );
  if (day.isPerfect || isPerfect) {
    dispatch(updateDay({ date: payload, isPerfect }));
  }
};

export const getDaysData = () => async (dispatch) => {
  dispatch(daysRequested());
  try {
    const data = await dayService.fetchAll();
    dispatch(daysRequestSuccess(data));
  } catch (error) {
    dispatch(daysRequestFailed(error.message));
  }
};

export const getDayDataStatus = () => (state) => state.days.dataLoaded;

export const getDays = () => (state) => state.days.entities;

// Habit status

export const addHabitStatus = (payload) => (dispatch) => {
  dispatch(habitStatusAddedRequested());
  dispatch(habitStatusAdded(payload));
};

export const updateHabitStatus =
  ({ date, _id, values }) =>
  async (dispatch) => {
    dispatch(habitStatusUpdateRequested());
    try {
      const { isCompleted } = await habitStatusService.update({
        _id,
        values
      });
      dispatch(habitStatusUpdateSuccess({ date, _id, isCompleted }));
      dispatch(checkIfPerfect(date));
    } catch (error) {
      dispatch(habitStatusUpdateFailed(error.message));
    }
  };

export const getHabitStatus = (habitId, date) => (state, dispatch) => {
  const day = state.days.entities.find((day) => day.date === date);

  const habitStatus = day.habitStatuses.find(
    (habit) => habit.habitId === habitId
  );
  return habitStatus;
};

export default daysReducer;
