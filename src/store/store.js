import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import usersReducer from "./users"
import housesReducer from "./houses"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer:{
        users:usersReducer,
        houses:housesReducer
    }
})

export default store;