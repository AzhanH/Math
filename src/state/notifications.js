import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, post} from '../api';
import {endpoints} from '../api/configs';

export const GetAllNotifications = createAsyncThunk(
  'teacher/notifications/all',
  async data => {
    try {
      const res = await get(endpoints.notifications.allNotifications, data);
      return res?.data;
    } catch (e) {
      throw new Error(e);
    }
  },
);

export const MarkNotificationAsRead = createAsyncThunk(
  'teacher/notification/mark-as-read',
  async id => {
    try {
      const res = await post(endpoints.notifications.readNotification(id));
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },
);
