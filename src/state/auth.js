import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import initial from './initial';
import {post} from '../api';
import {endpoints} from '../api/configs';

export const Logout = createAsyncThunk('teacher/logout', async () => {
  try {
    const res = await post(endpoints.auth.logout);
    return res;
  } catch (e) {
    throw new Error(e);
  }
});
export const RegisterUser = createAsyncThunk('teacher/register', async data => {
  try {
    const res = await post(endpoints.auth.signup, data, true);
    return res;
  } catch (e) {
    throw new Error(e);
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
