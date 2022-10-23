import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    temp: 5,
  },
  reducers: {},
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;
