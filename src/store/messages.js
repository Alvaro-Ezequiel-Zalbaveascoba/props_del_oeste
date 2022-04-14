import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
const intialState = {};
export const setMessagesRequest = createAsyncThunk("SET_MESSAGES", async (form) => {
    const res = await axios.post("/api/messages", form);
    return res.data;
});
export const setAllMessagesRequest = createAsyncThunk("SET_MESSAGES", async () => {
    const res = await axios.get("/api/messages");
    return res.data;
});



const messagesReducer = createReducer(intialState, {
    [setMessagesRequest.fulfilled]: (_state, action) => action.payload,
    [setAllMessagesRequest.fulfilled]: (_state, action) => action.payload

    

})
export default messagesReducer