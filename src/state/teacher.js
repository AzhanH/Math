import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, post} from '../api';
import {endpoints} from '../api/configs';

export const GetAllRegisteredStudents = createAsyncThunk(
  '/registeredStudent/all',
  async data => {
    try {
      let response = await get(endpoints.teacher.getMyStudents, data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const CreateContest = createAsyncThunk('/create-contest', async data => {
  try {
    let response = await post(endpoints.contest.createContest, data, true);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
export const GetContestDetail = createAsyncThunk(
  '/contest/details',
  async id => {
    try {
      let response = await get(endpoints.contest.getContestDetail(id));
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
