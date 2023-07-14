import { configureStore } from "@reduxjs/toolkit";
import { employeesApi } from "./services/employeesApi";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [employeesApi.reducerPath]: employeesApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(employeesApi.middleware),
})