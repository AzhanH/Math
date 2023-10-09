import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, post} from '../api';
import {endpoints} from '../api/configs';

export const CreateContest = createAsyncThunk('/create-contest', async data => {
  try {
    let response = await post(endpoints.contest.createContest, data, true);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
export const GetAllContests = createAsyncThunk('/contest-all', async data => {
  try {
    let response = await get(endpoints.contest.getAllContests, data);
    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
});
export const GetContestDetail = createAsyncThunk(
  '/contest-detail',
  async id => {
    try {
      let response = await get(endpoints.contest.getContestDetail(id));
      return response?.data;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const UpdateContest = createAsyncThunk('/contest-update', async data => {
  try {
    let response = await post(
      endpoints.contest.getContestDetail(data?.id),
      data,
      true,
    );
    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
});
export const SendInviteToParents = createAsyncThunk(
  'contest/send-invite',
  async data => {
    try {
      let response = await post(
        endpoints.contest.sendInviteToParents,
        data,
        true,
      );
      return response?.data;
    } catch (error) {
      throw new Error(error);
    }
  },
);
