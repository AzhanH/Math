import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk';
import general from './general';
import auth from './auth';
import {authApi} from '../api/authApis';
import {profileApi} from '../api/profileApis';
import {teacherApi} from '../api/teacherApis';
import {generalApi} from '../api/generalApis';
const persistedConfig = {
  key: 'MathBee',
  storage: AsyncStorage,
};
const reducers = combineReducers({
  authApi: authApi.reducer,
  profileApi: profileApi.reducer,
  teacherApi: teacherApi.reducer,
  auth,
  general,
});

const persistedReducer = persistReducer(persistedConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({serializableCheck: false}).concat([
      thunk,
      authApi.middleware,
      profileApi.middleware,
      teacherApi.middleware,
    ]);
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
