import { createContext, Dispatch, useEffect, useReducer } from "react";
import {
  AuthReducer,
  IAuthState,
  initialAuthState,
} from "../reducers/authReducer";
import jwtDecode from "jwt-decode";
import IUser from "../../shared/models/IUser";
import { AuthActions } from "../actions/auth/authTypes";
import IToken from "../../shared/models/IToken";
import { logout } from "../actions/auth/authActions";
import setAuthToken from "../../utils/setAuthToken";

export const AuthContext = createContext<{
  state: IAuthState;
  dispatch: Dispatch<any>;
}>({
  state: initialAuthState,
  dispatch: () => null,
});

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  useEffect(() => {
    // localStorage.removeItem("token");
    // Set auth state if token is in local storage
    if (localStorage.hasOwnProperty("token")) {
      const token = localStorage.getItem("token") as string;
      setAuthToken(token);

      // Decode token
      const decoded = jwtDecode(token) as IToken;
      const { userId, username, profilePic, exp } = decoded;

      // If token is expired, logout user
      const currDateTime = Date.now() / 1000;
      if (exp <= currDateTime) logout(dispatch);

      console.log(decoded);

      const payload: IUser = {
        userId,
        username,
        profilePic,
      };
      dispatch({ type: AuthActions.SET_USER, payload });
    }
  }, [state.auth]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
