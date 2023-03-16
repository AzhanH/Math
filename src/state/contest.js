import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, post} from '../api';
import {endpoints} from '../api/configs';

export const GetAllContests = createAsyncThunk('/create-contest', async () => {
  try {
    let response = await get(endpoints.contest.getAllContests);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});

export const CreateContest = createAsyncThunk('/create-contest', async data => {
  try {
    let response = await post(endpoints.contest.createContest, data, true);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
