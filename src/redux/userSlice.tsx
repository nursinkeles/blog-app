import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { initialState, ApiStatus } from "../types/Type";
import { createUser } from "../services/api";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending.type, (state) => {
        state.status = ApiStatus.LOADING;
      })
      .addCase(createUser.fulfilled.type, (state, action: any) => {
        state.items = action.payload;
        state.status = ApiStatus.SUCCESS;
      })
      .addCase(createUser.rejected.type, (state, action: any) => {
        state.status = ApiStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

const userSelector = (state: RootState) => state.article.items;
const userStatusSelector = (state: RootState) => state.article.status;
const userErrorSelector = (state: RootState) => state.article.error;

export { userSelector, userStatusSelector, userErrorSelector };

export default userSlice.reducer;
