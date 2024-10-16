import { configureStore } from "@reduxjs/toolkit";
import authReducer from './counterslice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
