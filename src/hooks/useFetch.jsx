import { useEffect, useState } from "react";
import fetchAPI from "../utils/api";

const useFetch = (url, params = "") => {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetchAPI(url, params)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("There is a error");
      });
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
