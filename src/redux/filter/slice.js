import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        priority: ""
    }, 
    reducers: {
        changeFilter(state, action) {
            state.priority = action.payload;
        }
    }
})

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;