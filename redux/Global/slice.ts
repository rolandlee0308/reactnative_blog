import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

import * as globService from "./service";

interface globalState {
  isThemeDark: boolean;
  blogPosts: Blog[];
}

type Blog = {
  id: string | number[];
  title: string;
  content: string;
};

export const getBlogPosts = createAsyncThunk(
  "glob/getPosts",
  async (_, thunkAPI) => {
    try {
      return await globService.getBlogPosts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addBlogPost = createAsyncThunk(
  "glob/addPost",
  async (data: any, thunkAPI) => {
    try {
      return await globService.addBlogPost({ ...data, id: uuid.v4() });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editBlogPost = createAsyncThunk(
  "glob/editPost",
  async (data: any, thunkAPI) => {
    try {
      return await globService.editBlogPost(data, data.id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteBlogPost = createAsyncThunk(
  "glob/deletePost",
  async (id: any, thunkAPI) => {
    try {
      return await globService.deleteBlogPost(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
    // addBlogPost: (state, action) => {
    //   state.blogPosts = [
    //     ...state.blogPosts,
    //     {
    //       id: uuid.v4(),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];
    // },
    // deleteBlogPost: (state, action) => {
    //   state.blogPosts = state.blogPosts.filter(
    //     (item) => item.id !== action.payload
    //   );
    // },
    // editBlogPost: (state, action) => {
    //   state.blogPosts = state.blogPosts.map((item) => {
    //     if (item.id === action.payload.id) {
    //       return action.payload;
    //     }
    //     return item;
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogPosts.fulfilled, (state, action) => {
        if (typeof action.payload === "object") {
          state.blogPosts = action.payload;
        }
      })
      .addCase(deleteBlogPost.fulfilled, (state, action) => {
        state.blogPosts = state.blogPosts.filter(
          (item) => item.id !== action.meta.arg
        );
      })
      .addCase(editBlogPost.fulfilled, (state, action) => {
        state.blogPosts = state.blogPosts.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      });
  },
});

export const { toggleTheme } = globalSlice.actions;
export default globalSlice.reducer;
