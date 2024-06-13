import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  register,
  updateUserInfo,
  // getUserInfo,
  refreshUser,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
      avatarURL: null,
      theme: "dark",
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logIn.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logOut.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      // .addCase(getUserInfo.pending, (state) => {
      //   state.loading = true;
      //   state.error = false;
      // })
      // .addCase(getUserInfo.fulfilled, (state, action) => {
      //   state.loading = false;
      //   // state.user = action.payload;
      //   state.user.name = action.payload.name;
      //   state.user.email = action.payload.email;
      //   state.user.theme = action.payload.theme;
      //   state.user.avatarURL = action.payload.avatarURL;
      //   state.isLoggedIn = true;
      // })
      // .addCase(getUserInfo.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // })
      .addCase(updateUserInfo.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.loading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.avatarURL = action.payload.avatarURL;
        state.user.theme = action.payload.theme;
        state.error = false;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.error = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.loading = false;
        state.error = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        // action.payload.avatarURL =
        //   "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg";
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.isRefreshing = false;
      }),
});
export const authReducer = authSlice.reducer;
