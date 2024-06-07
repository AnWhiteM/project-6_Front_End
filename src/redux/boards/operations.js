// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://localhost:8080/home";

// export const getBoards = createAsyncThunk("/", async (_, thunkAPI) => {
//   try {
//     const response = await axios.get("/");
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const addBoard = createAsyncThunk("/", async (newBoard, thunkAPI) => {
//   try {
//     const response = await axios.post(`/`, newBoard);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const updateBoard = createAsyncThunk("/", async (update, thunkAPI) => {
//   try {
//     const response = await axios.patch(`/${update.id}`, {
//       ////******* */  Вписати поля які обновляються******
//     });
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const deleteBoard = createAsyncThunk(
//   "/",
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/${contactId}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
