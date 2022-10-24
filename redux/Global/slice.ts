import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    isThemeDark: false,
    blogPosts: [{ title: "Blog Post #1" }, { title: "Blog Post #2" }],
  },
  reducers: {
    toggleTheme: (state) => {
      state.isThemeDark = !state.isThemeDark;
    },
    addBlogPost: (state) => {
      state.blogPosts = [
        ...state.blogPosts,
        { title: `Blog Post #${state.blogPosts.length + 1}` },
      ];
    },
  },
});

export const { toggleTheme, addBlogPost } = globalSlice.actions;
export default globalSlice.reducer;
