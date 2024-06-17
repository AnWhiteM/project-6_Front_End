import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_BASE_SERVER_URL;

export const getColumns = createAsyncThunk(
  "columns/getAll",
  async (deskId, thunkAPI) => {
    try {
      const response = await axios.get(`/columns/${deskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getColumn = createAsyncThunk(
  "columns/getColumn",
  async (column, thunkAPI) => {
    try {
      const response = await axios.get(
        `/columns/${column.owner}/${column._id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  "columns/addColumn",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `/columns/${data.board._id}`,
        data.newColumn
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateColumn = createAsyncThunk(
  "columns/updateColumn",
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(
        `/columns/${data.column.owner}/${data.column._id}`,
        { title: data.title }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  "columns/deleteColumn",
  async (column, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/columns/${column.owner}/${column._id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
