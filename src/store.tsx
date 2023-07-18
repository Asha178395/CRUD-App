import { configureStore } from "@reduxjs/toolkit";
import { employeesApi } from "./services/employeesApi";
import employeesSlice from  "./Features/employeesSlice"

export const store = configureStore({
    reducer: {
        employees: employeesSlice,
        [employeesApi.reducerPath]: employeesApi.reducer
    },
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(employeesApi.middleware),
})