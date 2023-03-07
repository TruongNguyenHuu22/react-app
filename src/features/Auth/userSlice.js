import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import storageKeys from 'constants/storage-keys';

export const register = createAsyncThunk('users/register', async (payload) => {
  //call api to register
  const data = await userApi.register(payload);
  localStorage.setItem(storageKeys.TOKEN, data.jwt);
  localStorage.setItem(storageKeys.USER, JSON.stringify(data.user));
  //save data to local storage

  return data.user;
});

export const login = createAsyncThunk('users/login', async (payload) => {
  //call api to register
  const data = await userApi.login(payload);
  localStorage.setItem(storageKeys.TOKEN, data.jwt);
  localStorage.setItem(storageKeys.USER, JSON.stringify(data.user));
  //save data to local storage

  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(storageKeys.USER)) || {},
    setting: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;

export default reducer;
