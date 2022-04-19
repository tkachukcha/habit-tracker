import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';
import dayService from '../services/day.service';
import localStorageService from '../services/localStorage.service';
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
    dayCreationSuccess: (state, action) => {
      const newEntities = [...state.entities];
      newEntities.push(action.payload);
      state.entities = [...newEntities];
    },
    dayCreationFailed: (state, action) => {
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
    }
  }
});

const { reducer: daysReducer, actions } = daysSlice;

const dayCreationRequested = createAction('days/dayCreationRequested');
const dayUpdateRequested = createAction('days/dayUpdateRequested');

const {
  daysRequested,
  daysRequestSuccess,
  daysRequestFailed,
  dayCreationSuccess,
  dayCreationFailed,
  dayUpdateSuccess,
  dayUpdateFailed
} = actions;

export const createDay = () => async (dispatch) => {
  dispatch(dayCreationRequested());
  try {
    const payload = {
      date: dayjs().format('DD/MM/YYYY')
    };
    const { day, statuses } = await dayService.create(payload);
    dispatch(dayCreationSuccess(day));
  } catch (error) {
    dispatch(dayCreationFailed(error.message));
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

export default daysReducer;
