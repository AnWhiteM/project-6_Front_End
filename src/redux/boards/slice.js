import { createSlice } from "@reduxjs/toolkit";
import { getBoards, addBoard, updateBoard, deleteBoard } from "./operations";

const boardSlice = createSlice({
  name: "boards",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getBoards.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getBoards.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteBoard.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (board) => board.id !== action.payload.id
        );
      })
      .addCase(deleteBoard.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addBoard.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addBoard.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(updateBoard.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.loading = false;
        const boardIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[boardIndex] = action.payload;
      })
      .addCase(updateBoard.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
  //   .addCase(logOut.fulfilled, (state) => {
  //     state.items = [];
  //     state.error = null;
  //     state.loading = false;
  //   }),
});

export const boardsReducer = boardSlice.reducer;
