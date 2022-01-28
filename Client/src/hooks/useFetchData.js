import { useEffect, useState } from "react";
import Axios from "axios";

export const useFetchData = () => {
  const [state, setState] = useState({
    datas: [],
    loading: true,
  });

  useEffect(() => {
    Axios.get("http://localhost:3002/records/lastTen").then((datas) => {
      setState({
        datas,
        loading: false,
      });
    });

    return () => {
      setState({});
    };
  }, []);

  return state;
};
