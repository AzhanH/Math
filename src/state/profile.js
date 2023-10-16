import {createAsyncThunk} from '@reduxjs/toolkit';

import {get, post} from '../api';
import {endpoints} from '../api/configs';

export const GetStudentProfile = createAsyncThunk(
  '/teacher/student/profile',
  async id => {
    try {
      let response = await get(endpoints.profile.getStudentProfile(id));
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const GetProfile = createAsyncThunk('/teacher/profile', async () => {
  try {
    let response = await get(endpoints.profile.getProfile);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
export const UpdateProfile = createAsyncThunk(
  '/teacher/profile/update',
  async data => {
    try {
      let response = await post(endpoints.profile.updateProfile, data, true);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const UpdatePassword = createAsyncThunk(
  '/teacher/update-password',
  async data => {
    try {
      let response = await post(endpoints.profile.changePassword, data, false);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
