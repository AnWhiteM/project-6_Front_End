import { createSlice } from "@reduxjs/toolkit";
import { addColumn, deleteColumn, getColumns, getColumn, updateColumn } from "./operations";

const columnSlice = createSlice({
  name: "column",
  initialState: {
    items: [],
    currentItem: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getColumns.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getColumns.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getColumns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getColumn.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.currentItem = action.payload;
      })
      .addCase(getColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addColumn.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateColumn.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map(column =>
          column.id === action.payload.id ? action.payload : column
        );
      })
      .addCase(updateColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteColumn.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (column) => column.id !== action.payload.id
        );
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const columnReducer = columnSlice.reducer;
