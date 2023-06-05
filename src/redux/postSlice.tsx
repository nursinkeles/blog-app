import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiStatus, Post, postInitialState } from "../types/Type";
import { createUser, fetchBlogs } from "../services/api";
import { RootState } from "./store";

const postSlice = createSlice({
  name: "posts",
  initialState: postInitialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.items.push(action.payload);
      state.status = ApiStatus.SUCCESS;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      });
  },
});

export const { addPost } = postSlice.actions;

export const addNewPost = (post: Post) => async (dispatch: any) => {
  const response = await axios.post<Post>("http://localhost:3000/posts", post);
  dispatch(addPost(response.data));
};
export const postSelector = (state: RootState) => state.post.items;
export default postSlice.reducer;
