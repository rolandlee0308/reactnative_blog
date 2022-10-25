import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

interface globalState {
  isThemeDark: boolean;
  blogPosts: Blog[];
}

type Blog = {
  id: string | number[];
  title: string;
  content: string;
};

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    isThemeDark: false,
    blogPosts: [],
  } as globalState,
  reducers: {
    toggleTheme: (state) => {
      state.isThemeDark = !state.isThemeDark;
    },
    addBlogPost: (state, action) => {
      state.blogPosts = [
        ...state.blogPosts,
        {
          id: uuid.v4(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    },
    deleteBlogPost: (state, action) => {
      state.blogPosts = state.blogPosts.filter(
        (item) => item.id !== action.payload
      );
    },
    editBlogPost: (state, action) => {
      state.blogPosts = state.blogPosts.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
  },
});

export const { toggleTheme, deleteBlogPost, addBlogPost, editBlogPost } =
  globalSlice.actions;
export default globalSlice.reducer;
