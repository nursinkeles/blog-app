import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { initialState, ApiStatus, Article } from "../../types/Type";
import { fetchArticles } from "../../services/apiService";

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending.type, (state) => {
        state.status = ApiStatus.LOADING;
      })
      .addCase(
        fetchArticles.fulfilled.type,
        (state, action: PayloadAction<Article[]>) => {
          state.items = action.payload;
          state.status = ApiStatus.SUCCESS;
        }
      )
      .addCase(
        fetchArticles.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.status = ApiStatus.FAILED;
          state.error = action.payload;
        }
      );
  },
});

const articlesSelector = (state: RootState) => state.article.items;
const articleStatusSelector = (state: RootState) => state.article.status;
const articleErrorSelector = (state: RootState) => state.article.error;

export { articlesSelector, articleStatusSelector, articleErrorSelector };

export default articleSlice.reducer;
