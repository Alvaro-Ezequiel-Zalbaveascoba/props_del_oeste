import {createAsyncThunk,createReducer} from "@reduxjs/toolkit";
import axios from "axios";

export const setRegisterRequest = createAsyncThunk("REGISTER", (form) => {
    return axios.post("/api/users", form).then((res) => res.data);
});
export const setLoginRequest = createAsyncThunk("LOGIN", (form) => {
    return axios.post("/api/login", form).then((res) => res.data);
});

const usersReducer=createReducer({},{
    [setRegisterRequest.fulfilled]:(state,action)=>action.payload,
    [setLoginRequest.fulfilled]: (state, action) => action.payload,
})
export default usersReducer