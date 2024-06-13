import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://project06back.onrender.com";

export const fetchTasks = createAsyncThunk("/tasks/getAll", async ({deskId, columnId}, thunkAPI) => {
    try {
        const response = await axios.get(`/home/${deskId}/columns/${columnId}/tasks`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addTask = createAsyncThunk("/tasks/addTask", async ({deskId, columnId}, thunkAPI) => {
    try {
        const response = await axios.post(`/home/${deskId}/columns/${columnId}/tasks`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const updateTask = createAsyncThunk("/tasks/updateTask", async ({deskId, columnId, taskId}, thunkAPI)=> {
    try {
        const response = await axios.put(`/home/${deskId}/columns/${columnId}/tasks/${taskId}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})  

export const deleteTask = createAsyncThunk("/tasks/deleteTask", async ({deskId, columnId, taskId}, thunkAPI) => {
    try {
        const response = await axios.delete(`/home/${deskId}/columns/${columnId}/tasks/${taskId}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})