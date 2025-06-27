import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CityForecast } from "../../types/types"

export type State = {
    apiResponse: CityForecast | null
}

const initialState: State = {
    apiResponse: null,
}

const apiDataSlice = createSlice({
    initialState,
    name: "weatherApiData",
    reducers: {
        changeData: (state, action: PayloadAction<CityForecast>) => {
            state.apiResponse = action.payload;
        },
    },
})

export const apiDataReducer = apiDataSlice.reducer;

export const { changeData } = apiDataSlice.actions;