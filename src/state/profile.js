import {createAsyncThunk} from '@reduxjs/toolkit';

import {get} from '../api';
import {endpoints} from '../api/configs';

export const GetStudentProfile = createAsyncThunk(
  '/teacher/auth/login',
  async id => {
    try {
      let response = await get(endpoints.profile.getStudentProfile(id));
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const GetProfile = createAsyncThunk('/teacher/auth/login', async () => {
  try {
    let response = await get(endpoints.profile.getProfile);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
