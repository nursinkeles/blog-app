import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  articleStatusSelector,
  articlesSelector,
} from "../redux/post/articleSlice";
import { ApiStatus } from "../types/Type";
import { createPost, fetchArticles, fetchPosts } from "../services/apiService";
import { postStatusSelector } from "../redux/post/postSlice";
import { postSelector } from "../redux/post/postSlice";

const useCustomDispatch = () => {
  const dispatch: AppDispatch = useDispatch();

  const status = useSelector(articleStatusSelector);
  const status2 = useSelector(postStatusSelector);
  const articles = useSelector(articlesSelector);
  const posts = useSelector(postSelector);

  useEffect(() => {
    status === ApiStatus.IDLE && dispatch(fetchArticles());
    status2 === ApiStatus.IDLE && dispatch(fetchPosts());
  }, [dispatch, status, status2]);
  // const userData = {
  //   username: "john_doe",
  //   password: "123456",
  //   email: "john@example.com",
  // };
  const handleAddPost = () => {
    const newPost = {
      title: "New Post",
      content: "Lorem ipsum dolor sit amet...",
      date: "15.06.2023",
      comments: [],
      author: {
        name: "John Smith",
        email: "john@example.com",
      },
    };

    dispatch(createPost(newPost));
  };

  return {
    status,
    status2,
    articles,
    posts,
    handleAddPost,
  };
};

export default useCustomDispatch;
