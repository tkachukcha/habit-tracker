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

export const checkDay = () => async (dispatch) => {
  dispatch(dayCheckRequested());
  try {
    const payload = {
      date: dayjs().format('DD/MM/YYYY')
    };
    const data = await dayService.create(payload);
    console.log(data);
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

export const addHabitStatus = (payload) => (dispatch) => {
  dispatch(habitStatusAddedRequested());
  dispatch(habitStatusAdded(payload));
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
