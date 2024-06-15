import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://project06back.onrender.com";


export const getColumns = createAsyncThunk(
  "columns/getAll",
  async (deskId, thunkAPI) => {
    try {
      const response = await axios.get(`/home/${deskId}/columns`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getColumn = createAsyncThunk(
  "columns/getColumn",
  async ({ deskId, columnId }, thunkAPI) => {
    try {
      const response = await axios.get(`/home/${deskId}/columns/${columnId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const addColumn = createAsyncThunk(
  "columns/addColumn",
  async ( data, thunkAPI) => {
    try {
      console.log(data);
      const response = await axios.post(`/home/${data.board._id}/columns`, data.newColumn);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const updateColumn = createAsyncThunk(
  "columns/updateColumn",
  async ({ deskId, columnId, updatedColumn }, thunkAPI) => {
    try {
      const response = await axios.put(`/home/${deskId}/columns/${columnId}`, updatedColumn);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteColumn = createAsyncThunk(
  "columns/deleteColumn",
  async ({ deskId, columnId }, thunkAPI) => {
    try {
      const response = await axios.delete(`/home/${deskId}/columns/${columnId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
