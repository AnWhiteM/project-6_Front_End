import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://project06back.onrender.com";

export const getColumns = createAsyncThunk(
  "columns/getAll",
  async (deskId, thunkAPI) => {
    try {
      const response = await axios.get(
        // `/home/${deskId}/columns`);
        `/columns/${deskId}`
      )
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
        // `/home/${column.owner}/columns/${column._id}`
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
        // `/home/${data.board._id}/columns`,
        // data.newColumn
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
      console.log(data);
      const response = await axios.put(
        // `/home/${data.column.owner}/columns/${data.column._id}`,
        // { title: data.title }
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
        // `/home/${column.owner}/columns/${column._id}`
        `/columns/${column.owner}/${column._id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
