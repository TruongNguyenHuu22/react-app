import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
import cartReducer from '../features/ShoppingCart/cartSlice';

const rootReducer = {
  count: counterReducer,
  user: userReducer,
  cart: cartReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
