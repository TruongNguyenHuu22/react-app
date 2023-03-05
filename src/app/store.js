import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/Counter/counterSlice';

const rootReducer = {
  count: counterSlice,
};

export const store = configureStore({
  reducer: rootReducer,
});
