import axios from "axios";
import jwtDecode from "jwt-decode";
import { Dispatch } from "react";
import { getBaseUrl } from "../../../shared/environments/environment";
import IUser from "../../../shared/models/IUser";
import { AuthActions } from "./authTypes";

const BASE_URL = getBaseUrl() + "/auth";

export const login = async (
  username: string,
  password: string,
  dispatch: Dispatch<any>
) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/login`, {
      username,
      password,
    });

    // Get token from response and set in local storage
    const { token } = data;
    localStorage.setItem("token", token);

    // Decode token and dispatch login success with contents
    const decoded = jwtDecode(token);
    console.log(decoded);

    dispatch({ type: AuthActions.LOGIN_SUCCESS, payload: decoded });
    // window.location.href = "/";
  } catch (error) {
    dispatch({ type: AuthActions.LOGIN_FAILURE });
  }
};

export const logout = (dispatch: Dispatch<any>) => {
  localStorage.removeItem("token");
  dispatch({ type: AuthActions.LOGOUT });
};

export const setUser = (user: IUser, dispatch: Dispatch<any>) => {
  dispatch({ type: AuthActions.SET_USER, payload: user });
};
