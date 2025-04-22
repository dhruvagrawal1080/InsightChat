import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem("token", JSON.stringify(state.token));
        }
    }
})

export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer