import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  articleStatusSelector,
  articlesSelector,
} from "../redux/post/articleSlice";
import { ApiStatus } from "../types/Type";
import {
  createPost,
  createUser,
  fetchArticles,
  fetchPosts,
  fetchUsers,
} from "../services/apiService";
import { postStatusSelector } from "../redux/post/postSlice";
import { postSelector } from "../redux/post/postSlice";
import { userSelector, userStatusSelector } from "../redux/user/userSlice";

const useCustomDispatch = () => {
  const dispatch: AppDispatch = useDispatch();

  const { articleStatus, postStatus, userStatus, articles, posts, users } =
    useSelector((state: RootState) => ({
      articleStatus: articleStatusSelector(state),
      postStatus: postStatusSelector(state),
      userStatus: userStatusSelector(state),
      articles: articlesSelector(state),
      posts: postSelector(state),
      users: userSelector(state),
    }));
  console.log(users);

  useEffect(() => {
    articleStatus === ApiStatus.IDLE && dispatch(fetchArticles());
    postStatus === ApiStatus.IDLE && dispatch(fetchPosts());
    userStatus === ApiStatus.IDLE && dispatch(fetchUsers());
  }, [dispatch, articleStatus, postStatus, userStatus]);

  const handleAddUser = () => {
    const userData = {
      username: "john_doe",
      password: "123456",
      email: "john@example.com",
    };
    dispatch(createUser(userData));
  };

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
    articles,
    posts,
    users,
    handleAddPost,
    handleAddUser,
  };
};

export default useCustomDispatch;
