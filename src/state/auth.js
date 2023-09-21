import {createSlice} from '@reduxjs/toolkit';
import initial from './initial';

export const authSlice = createSlice({
  name: initial.auth.name,
  initialState: initial.auth.state,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const {setToken, setUser} = authSlice.actions;
export default authSlice.reducer;
