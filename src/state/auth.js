import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import initial from './initial';

import {get, post} from '../api';
import {endpoints} from '../api/configs';

export const AuthenticateTeacher = createAsyncThunk(
  '/teacher/auth/login',
  async data => {
    try {
      let response = await post(endpoints.auth.login, data, true);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const ForgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async data => {
    try {
      let response = await post(endpoints.auth.forgotPassword, data, true);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const VerifyOtp = createAsyncThunk('auth/verify-otp', async data => {
  try {
    let response = await post(endpoints.auth.verifyCode, data, true);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
export const ResetPassword = createAsyncThunk(
  'auth/reset-password',
  async data => {
    try {
      let response = await post(endpoints.auth.resetPassword, data, true);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const Logout = createAsyncThunk('auth/logout', async () => {
  try {
    let response = await get(endpoints.auth.logout);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
export const RegisterUser = createAsyncThunk('auth/register', async data => {
  try {
    let response = await post(endpoints.auth.signup, data, true);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});

export const authSlice = createSlice({
  name: initial.auth.name,
  initialState: initial.auth.state,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const {setToken, setUser} = authSlice.actions;
export default authSlice.reducer;
