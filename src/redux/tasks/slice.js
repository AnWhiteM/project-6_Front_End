import { createSlice } from "@reduxjs/toolkit";
import { addTask, fetchTasks, updateTask, deleteTask } from "./operations";

const taskSlice = createSlice({
    name: "tasks",
    initialState: { items: [], loading: false, error: null },

    extraReducers: (builder) =>
        builder
        .addCase(fetchTasks.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addTask.pending, (state) => {
            state.loading = true;
        })
        .addCase(addTask.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(addTask.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateTask.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateTask.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.map(task => 
                task.id === action.payload.id ? action.payload : task
            );
        })
        .addCase(updateTask.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteTask.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateTask.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter(
                (task) => task.id !== action.payload.id
            );
        })
        .addCase(updateTask.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
})

export const tasksReducer = taskSlice.reducer;