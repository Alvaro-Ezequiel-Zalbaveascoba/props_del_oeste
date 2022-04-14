import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
const intialState = {};
export const setRegisterRequest = createAsyncThunk("REGISTER", async (form) => {
    const res = await axios.post("/api/users", form);
    return res.data;
});
export const setLoginRequest = createAsyncThunk("LOGIN", async (form) => {
    const res = await axios.post("/api/log/in", form);
    return res.data;
});
export const setMeRequest = createAsyncThunk("ME", async () => {
    const res = await axios.get("/api/log/me");
    return res.data;
})
export const setLogoutRequest = createAsyncThunk("LOGOUT", async () => {
    const res = await axios.post("/api/log/out");
    return res.data;
})



const meReducer = createReducer(intialState, {
    [setRegisterRequest.fulfilled]: (state, action) => action.payload,
    [setLoginRequest.fulfilled]: (state, action) => action.payload,
    [setMeRequest.fulfilled]: (state, action) => action.payload,
    [setLogoutRequest.fulfilled]: (state, action) => action.payload,
})
export default meReducer