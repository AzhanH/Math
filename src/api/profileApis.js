import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {base_url, endpoints} from './configs';
import {useSelector} from 'react-redux';

const logRequestUrlMiddleware =
  baseQuery => async (args, api, extraOptions) => {
    const {method, url} = args;
    const requestUrl = `${method}====>${base_url}${url}`;
    console.log(requestUrl);
    return baseQuery(args, api, extraOptions);
  };
export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: logRequestUrlMiddleware(
    fetchBaseQuery({
      baseUrl: base_url,
      prepareHeaders: headers => {
        // const {token} = useSelector(state => state.auth);
        // headers['Authorization'] = `Bearer ${token}`;
      },
    }),
  ),
  endpoints: builder => ({
    getProfile: builder.query({
      query: () => endpoints.profile.getProfile,
    }),
  }),
});

export const {useGetProfileQuery} = profileApi;
