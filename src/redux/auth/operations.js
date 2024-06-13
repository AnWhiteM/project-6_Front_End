import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://project06back.onrender.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "/auth/register",
  async (userInfo, thunkAPI) => {
    try {
      axios.defaults.headers.secretkey = "QWERTY";
      await axios.post("/auth/register", userInfo);
      const logResponse = await axios.post("/auth/login", userInfo);
      setAuthHeader(logResponse.data.token);
      return logResponse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      axios.defaults.headers.secretkey = "QWERTY";
      const response = await axios.post("/auth/login", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("/auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;
    setAuthHeader(savedToken);
    const response = await axios.get("/current");

    return response.data;
  },
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);

/*
 * GET @ /
 * headers: Authorization: Bearer token
 */

// export const getUserInfo = createAsyncThunk(
//   "user/getUserInfo",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/current");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

/*
 * Put @ /
 * headers: Authorization: Bearer token
 * body: {name, email, password }
 */
export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async (userData, thunkAPI) => {
    try {
      console.log(userData);
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;
      setAuthHeader(savedToken);
      const response = await axios.put("/current", userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);
