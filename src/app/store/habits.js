import { createAction, createSlice } from '@reduxjs/toolkit';

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
    habitUpdateSuccess: (state, action) => {}
  }
});

const { reducer: habitsReducer, actions } = habitsSlice;

export default habitsReducer;
