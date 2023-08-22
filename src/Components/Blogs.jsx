import "../index.css";
import { Link } from "react-router-dom";

const Blogs = ({ blogs}) => {
  return (
    <>
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h3> {blog.title}</h3>
              <h4>Written by {blog.author}</h4>
              
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
