export const LOCAL_BASE_URL = "http://localhost:8080/api";
export const PROD_BASE_URL = process.env.REACT_APP_API_URL;

export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") return LOCAL_BASE_URL;
  if (process.env.NODE_ENV === "production") return PROD_BASE_URL;
};
