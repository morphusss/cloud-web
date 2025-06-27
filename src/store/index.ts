import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiDataReducer } from "./weatherApiData/apiData.slice";

const apiReducer = combineReducers({
    weatherApiData: apiDataReducer
})

export default configureStore({
    reducer: apiReducer,
})

export type State = ReturnType<typeof apiReducer>;