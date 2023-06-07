import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiStatus, Post, postInitialState } from "../../types/Type";
import { createPost, fetchPosts } from "../../services/apiService";
import { RootState } from "../store";

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
      .addCase(createPost.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(fetchPosts.pending.type, (state) => {
        state.status = ApiStatus.LOADING;
      })
      .addCase(
        fetchPosts.fulfilled.type,
        (state, action: PayloadAction<Post[]>) => {
          state.items = action.payload;
          state.status = ApiStatus.SUCCESS;
        }
      )
      .addCase(
        fetchPosts.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.status = ApiStatus.FAILED;
          state.error = action.payload;
        }
      );
  },
});

export const { addPost } = postSlice.actions;

const postSelector = (state: RootState) => state.post.items;
const postStatusSelector = (state: RootState) => state.post.status;
const postErrorSelector = (state: RootState) => state.post.error;

export { postSelector, postStatusSelector, postErrorSelector };
export default postSlice.reducer;
