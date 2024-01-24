import React from "react";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

const User = () => {
  const { data: users, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (isLoading) {
    return <Loader/>
  }
  return (
    <>
      {error && <Error/>}
      <ul>
        {users.map(({ id, name }) => (
          <li key={id} className="item">
            <span className="num-item">№ {id} </span>
            <span> Name: {name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default User;
