import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      navigate('/')
    });
  };
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="author">Author:</label>
          <br />
          <select
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>

          <label htmlFor="blog">Blog:</label>
          <br />
          <textarea
            type="text"
            name="blog"
            required
            className="blog-input"
            placeholder="Share your thougths..."
            onChange={(e) => setBody(e.target.value)}
          />

          {!isPending && (
            <button type="submit" className="blog-submit">
              Add new blog
            </button>
          )}
          {isPending && (
            <button type="submit" className="blog-submit" disabled>
              Adding...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create;
