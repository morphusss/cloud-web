import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CityForecast } from "@src/types/types"
import type { AxiosError } from "axios"

export type State = {
    cityForecast: CityForecast | null,
    errorResponse: AxiosError | null,
}

const initialState: State = {
    cityForecast: null,
    errorResponse: null,
}

const weatherForecastSlice = createSlice({
    initialState,
    name: "weatherApiData",
    reducers: {
        getCityForecastSuccess: (state, action: PayloadAction<CityForecast | null>) => {
            state.cityForecast = action.payload;
        },
        getCityForecastFailed: (state, action: PayloadAction<AxiosError | null>) => {
            state.errorResponse = action.payload;
        }
    },
})

export const weatherForecastReducer = weatherForecastSlice.reducer;

export const { getCityForecastSuccess, getCityForecastFailed } = weatherForecastSlice.actions;