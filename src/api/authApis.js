import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {base_url, endpoints} from './configs';

const logRequestUrlMiddleware =
  baseQuery => async (args, api, extraOptions) => {
    const {method, url} = args;
    const requestUrl = `${method}====>${base_url}${url}`;
    console.log(requestUrl);
    return baseQuery(args, api, extraOptions);
  };
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: logRequestUrlMiddleware(fetchBaseQuery({baseUrl: base_url})),
  endpoints: builder => ({
    authenticateUser: builder.mutation({
      query: data => ({
        url: endpoints.auth.login,
        method: 'POST',
        body: data,
      }),
      transformResponse: response => response?.data,
      transformErrorResponse: response => response?.data,
    }),
    registerUser: builder.mutation({
      query: data => ({
        url: endpoints.auth.signup,
        method: 'POST',
        body: data,
      }),
      transformResponse: response => response?.data,
      transformErrorResponse: response => response?.data,
    }),
    forgotPassword: builder.mutation({
      query: data => ({
        url: endpoints.auth.forgotPassword,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: response => response?.data,
    }),
    verifyCode: builder.mutation({
      query: data => ({
        url: endpoints.auth.verifyCode,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: response => response?.data,
    }),
    resetPassword: builder.mutation({
      query: data => ({
        url: endpoints.auth.resetPassword,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: response => response?.data,
    }),
  }),
});

export const {
  useAuthenticateUserMutation,
  useRegisterUserMutation,
  useForgotPasswordMutation,
  useVerifyCodeMutation,
  useResetPasswordMutation,
} = authApi;
