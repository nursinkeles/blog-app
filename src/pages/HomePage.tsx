import { NavBar } from "../components/NavBar";
import useCustomDispatch from "../hooks/useCustomDispatch";
import { useState } from "react";

const HomePage = () => {
  const { articles, posts, users, handleAddPost, handleAddUser } =
    useCustomDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <NavBar handleSearchChange={handleSearchChange} />
      <br />
      <br />

      {filteredArticles.map((article) => (
        <p key={article.id}>{article.title}</p>
      ))}
      <button onClick={handleAddPost}>Add Post</button>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default HomePage;
