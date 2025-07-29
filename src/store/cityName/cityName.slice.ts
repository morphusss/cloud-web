import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type State = {
    cityName: string | null,
}

const initialState: State = {
    cityName: null,
}

const cityNameSlice = createSlice({
    initialState,
    name: "cityName",
    reducers: {
        getCityName: (state, action: PayloadAction<string | null>) => {
            state.cityName = action.payload;
        }
    }
});

export const cityNameReducer = cityNameSlice.reducer;

export const { getCityName } = cityNameSlice.actions;