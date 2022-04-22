import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';
import dayService from '../services/day.service';
import localStorageService from '../services/localStorage.service';
import habitStatusService from '../services/habitStatus.service';
import dayjs from 'dayjs';

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
      const newEntities = [...state.entities];
      newEntities.push(action.payload);
      state.entities = [...newEntities];
    },
    dayCheckFailed: (state, action) => {
      state.error = action.payload;
    },
    dayUpdateSuccess: (state, action) => {
      const index = state.entities.findIndex(
        (i) => i._id === action.payload._id
      );
      const newEntities = [...state.entities];
      newEntities[index] = {
        ...state.entities[index],
        ...action.payload.values
      };
      state.entities = [...newEntities];
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
      console.log(newEntities);
    },
    habitStatusUpdateFailed: (state, action) => {
      state.error = action.payload;
    }
  }
});

const { reducer: daysReducer, actions } = daysSlice;

const dayCheckRequested = createAction('days/dayCreationRequested');
const dayUpdateRequested = createAction('days/dayUpdateRequested');

const {
  daysRequested,
  daysRequestSuccess,
  daysRequestFailed,
  dayCheckSuccess,
  dayCheckFailed,
  dayUpdateSuccess,
  dayUpdateFailed,
  habitStatusUpdateSuccess,
  habitStatusUpdateFailed
} = actions;

export const checkDay = () => async (dispatch) => {
  dispatch(dayCheckRequested());
  try {
    const payload = {
      date: dayjs().format('DD/MM/YYYY')
    };
    const data = await dayService.create(payload);
    dispatch(dayCheckSuccess(data));
  } catch (error) {
    dispatch(dayCheckFailed(error.message));
  }
};

export const updateDay = (payload) => async (dispatch) => {
  console.log(payload);
  dispatch(dayUpdateRequested());
  try {
    payload.userId = localStorageService.getUserIdToken();
    await dayService.update(payload);
    dispatch(dayUpdateSuccess(payload));
  } catch (error) {
    dispatch(dayUpdateFailed(error.message));
  }
};

export const updateHabitStatus =
  ({ date, _id, values }) =>
  async (dispatch) => {
    dispatch(dayUpdateRequested());
    try {
      const { isCompleted } = await habitStatusService.update({
        _id,
        values
      });
      dispatch(habitStatusUpdateSuccess({ date, _id, isCompleted }));
    } catch (error) {
      dispatch(habitStatusUpdateFailed(error.message));
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

export const getHabitStatus = (habitId, date) => (state) => {
  const days = state.days.entities.filter((day) => day.date === date);
  const habitStatus = days[0].habitStatuses.find(
    (habit) => habit.habitId === habitId
  );

  return habitStatus;
};

export default daysReducer;
