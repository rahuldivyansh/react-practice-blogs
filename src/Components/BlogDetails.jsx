import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
  // App.jsx (shows the home.jsx) -> home -> Blogs.jsx -> each blog has link to a route(/blogs/id)
  // -> check for that route in App.jsx -> BlogDetails.jsx -> grab the id from useParams and show.
  // This hook grabs the route parameter from the route(url).
  // Here the route parameter is "id" because it was passed with name "id" in app.jsx route.
  const { id } = useParams();
  const { error, isPending, data: blog } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  function handleDelete() {
    fetch("http://localhost:8000/blogs/" + id,{
      method: 'DELETE'
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className="blog-details">
      {isPending && <h3>Pending ... </h3>}
      {error && <p>{error}</p>}
      {blog && (
        <article>
          <div>
            <h3>{blog.title}</h3>
            <h5>Written by - {blog.author}</h5>
          </div>
          <div>
            <p>{blog.body}</p>
          </div>
          <button onClick={handleDelete}>Delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
