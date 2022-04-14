import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import meReducer from "./me"
import housesReducer from "./houses"
import messagesReducer from "./messages"
import usersReducer from "./users"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer:{
        me:meReducer,
        houses:housesReducer,
        messages:messagesReducer,
        users:usersReducer
    }
})

export default store;