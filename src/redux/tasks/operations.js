import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://project06back.onrender.com";

export const fetchTasks = createAsyncThunk("/tasks/getAll", async ({deskId, columnId}, thunkAPI) => {
    try {
        const response = await axios.get(`/tasks/${deskId}/${columnId}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addTask = createAsyncThunk("/tasks/addTask", async ({deskId, columnId}, thunkAPI) => {
    try {
        const response = await axios.post(`/tasks/${deskId}/${columnId}`);
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

export const updateOwner = createAsyncThunk("/tasks/updateUser", async ({deskId, columnId, taskId}, thunkAPI) => {
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