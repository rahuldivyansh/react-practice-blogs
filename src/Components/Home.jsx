import { useEffect, useState } from "react";
import Blogs from "./Blogs";
import Navbar from "./Navbar";
import useFetch from "../Hooks/useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      <div className="home">
        <h1>Blog list</h1>
        {error && <p>{error}</p>}
        {isPending && <h3>Pending...</h3>}
        {blogs && <Blogs blogs={blogs} />}
      </div>
    </>
  );
};

export default Home;
