import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
const intialState = {};
export const setMessagesRequest = createAsyncThunk("SET_MESSAGES", (form) => {
    return axios.post("/api/messages", form).then((res) => res.data);
});
export const setAllMessagesRequest = createAsyncThunk("SET_MESSAGES", () => {
    return axios.get("/api/messages").then((res) => res.data);
});



const messagesReducer = createReducer(intialState, {
    [setMessagesRequest.fulfilled]: (_state, action) => action.payload,
    [setAllMessagesRequest.fulfilled]: (_state, action) => action.payload

    

})
export default messagesReducer