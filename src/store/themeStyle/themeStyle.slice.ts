import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type State = {
    type: string | null,
}

const initialState: State = {
    type: null,
}

const themeStyleSlice = createSlice({
    initialState,
    name: "isDark",
    reducers: {
        getStyleValue: (state, action: PayloadAction<string> ) => {
            state.type = action.payload;
        }
    }
})

export const themeStyleReducer = themeStyleSlice.reducer;

export const { getStyleValue } = themeStyleSlice.actions;