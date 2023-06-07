import useCustomDispatch from "../hooks/useCustomDispatch";

const HomePage = () => {
  const { articles, posts, users, handleAddPost, handleAddUser } =
    useCustomDispatch();

  return (
    <div>
      home
      {articles.map((article) => (
        <p key={article.id}>{article.title}</p>
      ))}
      <button onClick={handleAddPost}>Add Post</button>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default HomePage;
