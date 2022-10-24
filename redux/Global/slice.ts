import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    isThemeDark: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isThemeDark = !state.isThemeDark;
    },
  },
});

export const { toggleTheme } = globalSlice.actions;
export default globalSlice.reducer;
