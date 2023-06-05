import useCustomDispatch from "../hooks/useCustomDispatch";

const HomePage = () => {
  const { status, status2, articles, posts, handleAddPost } =
    useCustomDispatch();

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
