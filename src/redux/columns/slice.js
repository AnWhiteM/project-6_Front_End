import { createSlice } from "@reduxjs/toolkit";
import {
  addColumn,
  deleteColumn,
  getColumns,
  getColumn,
  updateColumn,
} from "./operations";

const columnSlice = createSlice({
  name: "column",
  initialState: {
    items: [],
    currentColumn: null,
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
        state.currentColumn = action.payload;
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
        state.currentColumn = action.payload;
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
        const columnIndex = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        if (columnIndex !== -1) {
          state.items[columnIndex] = action.payload;
          state.currentColumn = action.payload;
        }
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
        state.currentColumn = null;
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const columnReducer = columnSlice.reducer;
