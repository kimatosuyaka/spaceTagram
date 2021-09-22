import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isMountedRef = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMountedRef.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
        }
      });
  }, [url]);

  return state;
};
