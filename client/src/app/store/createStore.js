import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './users';
import habitsReducer from './habits';

const rootReducer = combineReducers({
  users: usersReducer,
  habits: habitsReducer
});

export function createStore() {
  return configureStore({ reducer: rootReducer });
}
