import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./post/articleSlice";
import userReducer from "./user/userSlice";
import postReducer from "./post/postSlice";

export const store = configureStore({
  reducer: { article: articleReducer, user: userReducer, post: postReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
