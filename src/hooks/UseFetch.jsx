import React, { useEffect, useState } from "react";

const useFetch = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError("Oops! An Error occurred");
    }
  };

  useEffect(() => {
    getData(url);
  }, []);
  return [data, loading, error];
};

export default useFetch;
