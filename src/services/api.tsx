import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../types/Type";

const createData = async (url: string, data: Object) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/${url}`,
    data
  );
  return response.data;
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const response = await axios(
      `${process.env.REACT_APP_API_ARTICLE_ENDPOINT}`
    );
    return response.data;
  }
);
export const fetchBlogs = createAsyncThunk("posts/fetchBlogs", async () => {
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/posts`
  );
  return response.data;
});
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
