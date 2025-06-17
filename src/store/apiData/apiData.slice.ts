import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CityForecast } from "../../types/types"

export type State = {
    apiResponse: CityForecast[]
}

const initialState: State = {
    apiResponse: [],
}

const apiDataSlice = createSlice({
    initialState,
    name: "apiData",
    reducers: {
        changeData: (state, action: PayloadAction<CityForecast>) => {
            state.apiResponse = [action.payload];
        },
        initializeApiData: (state, action: PayloadAction<CityForecast>) => {
            state.apiResponse = [action.payload];
        },
    },
})

export const apiDataReducer = apiDataSlice.reducer;

export const { changeData, initializeApiData} = apiDataSlice.actions;