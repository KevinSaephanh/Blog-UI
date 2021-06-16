import { useEffect, useState } from "react";
import axios from "axios";

// Custom hook for api calls
const useAxios = (url: string) => {
  const [state, setState] = useState({ data: {} });

  useEffect(() => {
    setState((state) => ({ data: state.data }));

    const callApi = async () => {
      const res = await axios.request({ url });
      setState({ data: res });
    };
    callApi();
  }, [url, setState]);

  return state;
};

export default useAxios;
