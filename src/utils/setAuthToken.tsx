import axios from "axios";

const setAuthToken = (token: string | null) => {
  if (token !== null) axios.defaults.headers.common["Authorization"] = token;
  else delete axios.defaults.headers.common["Authorization"];
};

export default setAuthToken;
