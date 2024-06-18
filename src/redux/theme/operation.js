import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://project06back.onrender.com";

export const sendThemeToServer = createAsyncThunk(
  "theme/chooseTheme",
  async (theme, thunkAPI) => {
    try {
      const response = await axios.put("/users/theme", { theme });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
