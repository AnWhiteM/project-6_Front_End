import { createSlice } from "@reduxjs/toolkit";
import { sendThemeToServer } from "./operation";
const initialState = {
  theme: "dark",
  status: "idle",
  error: null,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendThemeToServer.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(sendThemeToServer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.theme = action.payload.theme || action.payload;
      })
      .addCase(sendThemeToServer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setTheme } = themeSlice.actions;

export const themsReducer = themeSlice.reducer;
