import { createSlice, type PayloadAction } from "@reduxjs/toolkit"


export type State = {
    searchValue: string,   
}

const initialState: State = {
    searchValue: "",
}

const searchCitySlice = createSlice({
    initialState,
    name: "searchCity",
    reducers: {
        getSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;   
        }
    },
})

export const searchCityReducer = searchCitySlice.reducer;

export const { getSearchValue } = searchCitySlice.actions;