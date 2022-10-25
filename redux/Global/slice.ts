import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    isThemeDark: false,
    blogPosts: [
      { id: uuid.v4(), title: "Blog Post #1" },
      { id: uuid.v4(), title: "Blog Post #2" },
    ],
  },
  reducers: {
    toggleTheme: (state) => {
      state.isThemeDark = !state.isThemeDark;
    },
    addBlogPost: (state) => {
      state.blogPosts = [
        ...state.blogPosts,
        { id: uuid.v4(), title: `Blog Post #${state.blogPosts.length + 1}` },
      ];
    },
    deleteBlogPost: (state, action) => {
      state.blogPosts = state.blogPosts.filter((item) => item.id !== action.payload);
    },
  },
});

export const { toggleTheme, addBlogPost, deleteBlogPost } = globalSlice.actions;
export default globalSlice.reducer;
