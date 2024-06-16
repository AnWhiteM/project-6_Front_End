import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://project06back.onrender.com";

export const getBoards = createAsyncThunk(
  "boards/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/home");
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
      const response = await axios.post(`/home`, newBoard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentBoard = createAsyncThunk(
  "boards/currentBoard", 
  async (deskId, thunkAPI) => {
    try {
      const response = await axios.get(`/home/${deskId}`)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const updateBoard = createAsyncThunk(
  "boards/updateBoard",
  async (update, thunkAPI) => {
    try {
      const response = await axios.put(`/home/${update.id}`, {
        title: update.title,
        icon: update.icon,
        background: update.background,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "boards/deleteBoard",
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/home/${boardId}`);
      await thunkAPI.dispatch(getBoards());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendHelpMessage = createAsyncThunk(
  "boards/sendHelpMessage",
  async (helpMessage, thunkAPI) => {
    try {
      console.log(helpMessage);
      const response = await axios.post(`/users/help`, helpMessage);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
