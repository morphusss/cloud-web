import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiDataReducer } from "./apiData/apiData.slice";

const apiReducer = combineReducers({
    apiData: apiDataReducer
})

export default configureStore({
    reducer: apiReducer,
})

export type State = ReturnType<typeof apiReducer>;