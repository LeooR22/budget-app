import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";

export const useFetchData = (type) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getData(type).then((data) => {
      setState({
        data,
        loading: false,
      });
    });
  }, [type]);

  return state;
};
