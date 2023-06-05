import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../types/Type";
import { createData, fetchData } from "./apiHelpers";

export const fetchArticles = createAsyncThunk("articles/fetchArticles", () =>
  fetchData(`${process.env.REACT_APP_API_ARTICLE_ENDPOINT}`)
);

export const fetchPosts = createAsyncThunk("posts/fetchPosts", () =>
  fetchData(`${process.env.REACT_APP_API_BASE_ENDPOINT}/posts`)
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData: Object) => {
    return createData("users", userData);
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData: Post) => {
    return createData("posts", postData);
  }
);
