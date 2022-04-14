import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
const intialState = {};

export const setUsersRequest = createAsyncThunk("SET_USERS", async () => {
    const res = await axios.get("/api/users");
    return res.data;
})


const usersReducer = createReducer(intialState, {
    
    [setUsersRequest.fulfilled]: (state, action) => action.payload,
})
export default usersReducer