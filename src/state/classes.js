import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, post} from '../api';
import {endpoints} from '../api/configs';

export const GetAllClasses = createAsyncThunk('/classes-all', async data => {
  try {
    let response = await get(endpoints.classes.allClasess, data);
    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
});
export const CreateClass = createAsyncThunk('/classes-create', async data => {
  try {
    let response = await post(endpoints.classes.createClass, data, true);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
export const ClassDetails = createAsyncThunk('/class-detail', async id => {
  try {
    let response = await get(endpoints.classes.classDetails(id));
    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
});
export const RemoveStudent = createAsyncThunk(
  '/class-remove/student',
  async id => {
    try {
      let response = await get(endpoints.classes.removeStudentFromClass(id));
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const AddStudentsToClass = createAsyncThunk(
  '/student-add',
  async data => {
    try {
      let response = await post(
        endpoints.classes.addStudentToClass,
        data,
        true,
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
