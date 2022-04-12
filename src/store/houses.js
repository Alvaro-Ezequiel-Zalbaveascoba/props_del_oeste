import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
const intialState = {};
export const setHousesRequest = createAsyncThunk("SET_HOUSES", async () => {
    const res = await axios.get("/api/houses");
    return res.data;
})
export const setHousesTypesRequest = createAsyncThunk("SET_TYPES", async (id) => {
    const res = await axios.get(`/api/houses/typesofhouse/${id}`);
    return res.data;
})


const usersReducer = createReducer(intialState, {
    [setHousesRequest.fulfilled]: (_state, action) => action.payload,
    [setHousesTypesRequest.fulfilled]:(_state, action)=> action.payload,
})
export default usersReducer