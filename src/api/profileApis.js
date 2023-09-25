import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {base_url, endpoints} from './configs';

const getToken = state => state.auth.token;
export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
    prepareHeaders: (headers, {getState}) => {
      const token = getToken(getState());
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getProfile: builder.query({
      query: () => {
        const requestUrl = `GET====>${base_url}${endpoints.profile.getProfile}`;
        console.log(requestUrl);
        return endpoints.profile.getProfile;
      },
      transformResponse: response => response?.data,
    }),
    updatePassword: builder.mutation({
      query: data => {
        const requestUrl = `POST====>${base_url}${endpoints.profile.changePassword}`;
        console.log(requestUrl);
        return {
          url: endpoints.profile.changePassword,
          method: 'POST',
          body: data,
        };
      },
      transformErrorResponse: response => response?.data,
    }),
  }),
});

export const {useGetProfileQuery, useUpdatePasswordMutation} = profileApi;
