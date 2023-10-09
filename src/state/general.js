import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {get, post} from '../api';
import {endpoints} from '../api/configs';
import initial from './initial';

export const GetPrivacyPolicy = createAsyncThunk(
  '/privacy-policy',
  async () => {
    try {
      let response = await get(endpoints.general.privacy);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const GetTerms = createAsyncThunk('/terms-and-conditions', async () => {
  try {
    let response = await get(endpoints.general.terms);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});

export const GetAllStudents = createAsyncThunk('/all-students', async data => {
  try {
    let response = await get(endpoints.general.getAllStudents, data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});

export const GetGeneralData = createAsyncThunk('/general', async () => {
  try {
    let response = await get(endpoints.general.getGeneralData);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});

export const GetStateViaCountry = createAsyncThunk(
  '/state/country',
  async data => {
    try {
      let response = await get(endpoints.general.state, data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const GetAllTeachers = createAsyncThunk('/all-teachers', async data => {
  try {
    let response = await get(endpoints.general.allTeachers, data);
    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
});
export const ContactUs = createAsyncThunk('/contact-us', async data => {
  try {
    let response = await post(endpoints.general.contactUs, data, true);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});

export const generalSlice = createSlice({
  name: initial.general.name,
  initialState: initial.general.state,
  reducers: {
    setGeneralData: (state, action) => {
      state.general = action.payload;
    },
  },
});
export const {setGeneralData} = generalSlice.actions;
export default generalSlice.reducer;
