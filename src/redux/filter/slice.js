import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: "filter",
    initialState: {
        priority: "All"
    }, 
    reducers: {
        setFilterPriority(state, action) {
            state.priority = action.payload;
        }
    }
})

export const { setFilterPriority } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;