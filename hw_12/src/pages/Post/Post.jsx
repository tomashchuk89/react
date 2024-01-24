import React from "react";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import "./Post.css";

const Post = () => {
  const { data: posts, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (isLoading) {
    return <Loader/>;
  }
  return (
    <>
      {error && <Error/>}
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id} className="item">
            <span className="num-item">№ {id} </span>
            <span> Name: {title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Post;
