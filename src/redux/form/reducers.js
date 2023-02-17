import { createSlice } from "@reduxjs/toolkit";
import { postThunk } from "./thunks";

export const feedbackFormSlice = createSlice({
  name: "feedbackForm",
  initialState: {
    form: { name: null, email: null, message: null },
    loading: false,
    error: null,
  },

  extraReducers: {
    [postThunk.pending]: (state) => {
      state.loading = true;
    },
    [postThunk.fulfilled]: (state, action) => {
      state.form = action.payload.form;
      state.loading = false;
    },
    [postThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default feedbackFormSlice.reducer;
