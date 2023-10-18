import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getMessage,
  handleResponse,
  jsonToFormdata,
  performNetworkRequest,
  Toast,
} from '../api/APIHelpers';
import {base_url, endpoints} from '../api/configs';

export const ReadPlans = createAsyncThunk('plans/read', async token => {
  try {
    if (token) {
      let headers = {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token} `,
      };
      let configs = {
        method: 'GET',
        headers: headers,
      };
      const networkResult = await performNetworkRequest(
        base_url + endpoints.plans.readPlans,
        configs,
      );
      const result = await handleResponse(networkResult);
      return result;
    }
  } catch (error) {
    Toast.error(getMessage(error));
    throw new Error(error);
  }
});

export const PayForPlan = createAsyncThunk('plans/pay', async data => {
  try {
    if (data?.token) {
      let headers = {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data',
        redirect: 'follow',
        Authorization: `Bearer ${data?.token}`,
      };
      let configs = {
        method: 'POST',
        headers: headers,
        body: jsonToFormdata(data),
      };
      const networkResult = await performNetworkRequest(
        base_url + endpoints.plans.subscribePlan(data?.planId),
        configs,
      );
      const result = await handleResponse(networkResult);
      return result;
    }
  } catch (e) {
    console.log('Error', e);
    throw new Error(e);
  }
});
