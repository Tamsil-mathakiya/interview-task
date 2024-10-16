import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
    },
    reducers: {
        register: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { register, login, logout } = counterSlice.actions;
export default counterSlice.reducer;
