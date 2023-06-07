import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ApiStatus, User, userInitialState } from "../../types/Type";
import { createUser, fetchUsers } from "../../services/apiService";

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.items.push(action.payload);
      state.status = ApiStatus.SUCCESS;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(fetchUsers.pending.type, (state) => {
        state.status = ApiStatus.LOADING;
      })
      .addCase(
        fetchUsers.fulfilled.type,
        (state, action: PayloadAction<User[]>) => {
          state.items = action.payload;
          state.status = ApiStatus.SUCCESS;
        }
      )
      .addCase(
        fetchUsers.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.status = ApiStatus.FAILED;
          state.error = action.payload;
        }
      );
  },
});

export const { addUser } = userSlice.actions;

const userSelector = (state: RootState) => state.user.items;
const userStatusSelector = (state: RootState) => state.user.status;
const userErrorSelector = (state: RootState) => state.user.error;

export { userSelector, userStatusSelector, userErrorSelector };

export default userSlice.reducer;
