import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice";
import userReducer from "./userSlice";
import postReducer from "./postSlice";

export const store = configureStore({
  reducer: { article: articleReducer, user: userReducer, post: postReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
