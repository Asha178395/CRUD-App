import { createSlice } from '@reduxjs/toolkit';
import { employeesApi } from '../services/employeesApi';
import {emptype } from '../types';


const initialState: emptype = {
  employees: [],

  isLoading: false,
  error: null,
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(employeesApi.endpoints.employees.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(employeesApi.endpoints.employees.matchFulfilled, (state, action) => {
        state.isLoading = false;
        state.employees = action.payload;
      })
      .addMatcher(employeesApi.endpoints.employees.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      
  },
});

export default employeesSlice.reducer;
