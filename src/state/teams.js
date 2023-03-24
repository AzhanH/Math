import {createAsyncThunk} from '@reduxjs/toolkit';

import {get, post} from '../api';
import {endpoints} from '../api/configs';

export const CreateTeam = createAsyncThunk(
  '/teacher/teams/create',
  async data => {
    try {
      let response = await post(endpoints.teams.createTeam, data, true);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const GetAllTeams = createAsyncThunk(
  '/teacher/teams/all',
  async data => {
    try {
      let response = await get(endpoints.teams.getAllTeams, data);

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
