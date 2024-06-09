import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://localhost:8080/home";

export const getBoards = createAsyncThunk(
  "boards/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  "boards/addBoard",
  async (newBoard, thunkAPI) => {
    try {
      const response = await axios.post(`/`, newBoard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  "boards/updateBoard",
  async (update, thunkAPI) => {
    try {
      const response = await axios.put(`/${update.id}`, {
        ////******* */  Вписати поля які обновляються******
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "boards/deleteBoard",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
