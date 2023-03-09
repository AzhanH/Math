import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, post} from '../api';
import {endpoints} from '../api/configs';

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
export const ContactUs = createAsyncThunk('/contact-us', async data => {
  try {
    let response = await post(endpoints.general.contactUs, data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
