import { createSlice } from "@reduxjs/toolkit";
import {
  getBoards,
  addBoard,
  updateBoard,
  deleteBoard,
  sendHelpMessage,
  currentBoard,
} from "./operations";

const boardSlice = createSlice({
  name: "boards",
  initialState: {
    items: [],
    currentBoard: null,
    loading: false,
    error: null,
  },
  // reducers: {
  //   setCurrentBoardId(state, action) {
  //     state.currentBoardId = action.payload;
  //   },
  // },
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
          (board) => board._id !== action.meta.arg
        );
        state.currentBoard = null;
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
        state.currentBoard = action.payload;
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
          (item) => item._id === action.payload._id
        );
        if (boardIndex !== -1) {
          state.items[boardIndex] = action.payload;
          state.currentBoard = action.payload;
        }
      })
      .addCase(updateBoard.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(sendHelpMessage.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(sendHelpMessage.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendHelpMessage.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(currentBoard.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(currentBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBoard = action.payload;
      })
      .addCase(currentBoard.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const { setCurrentBoardId } = boardSlice.actions;
export const boardsReducer = boardSlice.reducer;
