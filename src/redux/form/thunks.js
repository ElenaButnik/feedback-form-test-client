import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3000";

export const postThunk = createAsyncThunk(
  "postMessage",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/form", credentials);
      return data;
    } catch (err) {
      alert("Something went wrong");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);