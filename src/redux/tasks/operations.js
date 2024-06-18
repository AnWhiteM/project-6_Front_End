import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://project06back.onrender.com";

export const fetchTasks = createAsyncThunk(
  "/tasks/getAll",
  async (column, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks/${column.owner}/${column._id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "/tasks/addTask",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `/tasks/${data.column.owner}/${data.column._id}`,
        data.newTask
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getTask = createAsyncThunk(
  "/tasks/getTask",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `/tasks/${data.deskId}/${data.columnId}/${data.taskId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "/tasks/updateTask",
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(
        `/tasks/${data.deskId}/${data.columnId}/${data.taskId}`,
        data.updatedTask
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateOwner = createAsyncThunk(
  "/tasks/updateOwner",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/tasks/${data.deskId}/${data.columnId}/${data.taskId}`,
        { owner: data.newColumnId }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "/tasks/deleteTask",
  async (data, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/tasks/${data.deskId}/${data.columnId}/${data.taskId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
