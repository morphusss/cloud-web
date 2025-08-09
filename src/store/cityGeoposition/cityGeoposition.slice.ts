import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { GeoDetails } from "@src/types/types"

export type State = {
    cityGeo: GeoDetails | null,
}

const initialState: State = {
    cityGeo: null
}

const cityGeoSlice = createSlice({
    initialState,
    name: "cityGeo",
    reducers: {
        getCityGeo: (state, action: PayloadAction<GeoDetails | null>) => {
            state.cityGeo = action.payload;
        }
    }
});

export const cityGeoReducer = cityGeoSlice.reducer;

export const { getCityGeo } = cityGeoSlice.actions;