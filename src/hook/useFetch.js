import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isMountedRef = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    console.log("montado");
    return () => {
      isMountedRef.current = false;
      console.log("Desmontado");
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //se coloco un setTimer para la prueba del useRef
        // setTimeout(()=>{
        // }, 2000)

        if (isMountedRef.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log("Ya se desmonto");
        }
      });
  }, [url]);

  return state;
};
