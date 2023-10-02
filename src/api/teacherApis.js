import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {base_url, endpoints} from './configs';

const getToken = state => state.auth.token;
export const teacherApi = createApi({
  reducerPath: 'teacherApi',
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
    sendInvite: builder.mutation({
      query: data => {
        const requestUrl = `POST====>${base_url}${endpoints.teacher.sendStudentInvite}`;
        console.log(requestUrl);
        return {
          url: endpoints.teacher.sendStudentInvite,
          method: 'POST',
          body: data,
        };
      },
      transformErrorResponse: response => response?.data,
    }),
    getMyStudents: builder.query({
      query: () => {
        const requestUrl = `GET====>${base_url}${endpoints.teacher.getMyStudents}`;
        console.log(requestUrl);
        return endpoints.teacher.getMyStudents;
      },

      transformResponse: response => response?.data,
    }),
  }),
});

export const {useSendInviteMutation, useGetMyStudentsQuery} = teacherApi;
