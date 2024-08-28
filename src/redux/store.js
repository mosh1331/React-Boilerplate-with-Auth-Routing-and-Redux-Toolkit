// src/redux/store.js
import authReducer from './authSlice';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { setReduxStore } from '../service/apiConfig';
import testSlice from './testSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  test:testSlice
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth','test'], // only auth will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Call setReduxStore function after creating the store
setReduxStore(store);
