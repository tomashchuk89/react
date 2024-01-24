import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setData(data);
      } catch (e) {
        setError(true);
        console.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
