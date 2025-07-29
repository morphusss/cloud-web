import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CityForecast } from "../../types/types"

export type State = {
    cityForecast: CityForecast | null,
}

const initialState: State = {
    cityForecast: null,
}

const apiDataSlice = createSlice({
    initialState,
    name: "weatherApiData",
    reducers: {
        getCityForecastSuccess: (state, action: PayloadAction<CityForecast | null>) => {
            state.cityForecast = action.payload;
        },
    },
})

export const apiDataReducer = apiDataSlice.reducer;

export const { getCityForecastSuccess } = apiDataSlice.actions;