import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "../redux/store";
import { articleStatusSelector, articlesSelector } from "../redux/articleSlice";
import { ApiStatus } from "../types/Type";
import { createPost, fetchArticles, fetchBlogs } from "../services/api";
import { addNewPost, addPost } from "../redux/postSlice";
import { postSelector } from "../redux/postSlice";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();

  const status = useSelector(articleStatusSelector);
  const articles = useSelector(articlesSelector);
  const posts = useSelector(postSelector);
  console.log(posts);

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

    dispatch(addNewPost(newPost));
    // dispatch(addPost(newPost));
  };
  useEffect(() => {
    status === ApiStatus.IDLE && dispatch(fetchArticles());
    // dispatch(createUser(userData));
    // dispatch(addPost(postData));
    dispatch(fetchBlogs());
  }, [dispatch, status]);
  return (
    <div>
      home
      {articles.map((article) => (
        <p key={article.id}>{article.title}</p>
      ))}
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default HomePage;
