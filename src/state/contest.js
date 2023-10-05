import {createAsyncThunk} from '@reduxjs/toolkit';
import {post} from '../api';
import {endpoints} from '../api/configs';

export const CreateContest = createAsyncThunk('/create-contest', async data => {
  console.log(data);
  try {
    let response = await post(endpoints.contest.createContest, data, true);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
