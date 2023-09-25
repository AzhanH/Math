import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {base_url, endpoints} from './configs';

export const getGeneralData = async () => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const requests = [
    fetchBaseQuery({baseUrl: base_url})(endpoints.general.allClasess, {
      signal,
    }),
    fetchBaseQuery({baseUrl: base_url})(endpoints.general.allCountries, {
      signal,
    }),
    fetchBaseQuery({baseUrl: base_url})(endpoints.general.allLevels, {
      signal,
    }),
    fetchBaseQuery({baseUrl: base_url})(endpoints.general.allModes, {
      signal,
    }),
    fetchBaseQuery({baseUrl: base_url})(endpoints.general.allSchools, {
      signal,
    }),
  ];
  const responses = await Promise.all(requests);
  return {
    classes: responses[0]?.data?.data,
    countries: responses[1]?.data?.data,
    levels: responses[2]?.data?.data,
    modes: responses[3]?.data?.data,
    schools: responses[4]?.data?.data,
  };
};
