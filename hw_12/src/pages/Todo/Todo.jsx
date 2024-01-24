import React from "react";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

const Todo = () => {
  const { data: todos, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  if (isLoading) {
    return <Loader/>;
  }
  return (
    <>
      {error && <Error/>}
      <ul>
        {todos.map(({ id, title }) => (
          <li key={id} className="item">
            <span className="num-item">№ {id} </span>
            <span> Name: {title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todo;
