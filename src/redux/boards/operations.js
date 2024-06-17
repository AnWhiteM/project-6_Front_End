import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_BASE_SERVER_URL;

export const getBoards = createAsyncThunk(
  "boards/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/desks");
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
      const response = await axios.post(`/desks`, newBoard);
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
      const response = await axios.get(`/desks/${deskId}`);
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
      const response = await axios.put(`/desks/${update.id}`, {
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
      const response = await axios.delete(`/desks/${boardId}`);
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
