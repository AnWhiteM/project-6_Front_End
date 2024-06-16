import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://project06back.onrender.com";

export const fetchTasks = createAsyncThunk("/tasks/getAll", async (column, thunkAPI) => {
    try {
        const response = await axios.get(`/tasks/${column.owner}/${column._id}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addTask = createAsyncThunk("/tasks/addTask", async (data, thunkAPI) => {
    try {
        const response = await axios.post(`/tasks/${data.column.owner}/${data.column._id}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const currentTask = createAsyncThunk("/tasks/currentTask", async ({deskId, columnId, taskId}, thunkAPI) => {
    try {
        const response = await axios.get(`/tasks/${deskId}/${columnId}/${taskId}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const updateTask = createAsyncThunk("/tasks/updateTask", async ({deskId, columnId, taskId}, thunkAPI)=> {
    try {
        const response = await axios.put(`/tasks/${deskId}/${columnId}/${taskId}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})  

export const updateOwner = createAsyncThunk("/tasks/updateColumn", async ({deskId, columnId, taskId}, thunkAPI) => {
    try {
        const response = await axios.patch(`/tasks/${deskId}/${columnId}/${taskId}`);
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const deleteTask = createAsyncThunk("/tasks/deleteTask", async ({deskId, columnId, taskId}, thunkAPI) => {
    try {
        const response = await axios.delete(`/tasks/${deskId}/${columnId}/${taskId}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})