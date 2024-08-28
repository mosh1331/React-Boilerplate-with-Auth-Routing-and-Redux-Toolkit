// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    data: [],
   
  },
  reducers: {
    storeToData: (state,action) => {
      state.data = action.payload;
    },
    deleteData: (state) => {
      state.data = [];
    },
  
  },
});

export const { storeToData,deleteData } = testSlice.actions;

export default testSlice.reducer;
