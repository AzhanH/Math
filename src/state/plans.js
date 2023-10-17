import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getMessage,
  handleResponse,
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
