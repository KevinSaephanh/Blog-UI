import { createContext, useEffect, useReducer } from "react";
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

export const AuthContext = createContext<{
  state: IAuthState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialAuthState,
  dispatch: () => null,
});

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  useEffect(() => {
    // localStorage.removeItem("token");
    if (localStorage.hasOwnProperty("token")) {
      const token = localStorage.getItem("token") as string;
      const decoded = jwtDecode(token) as IToken;
      const { userId, username, photo, exp } = decoded;

      // Set condition for expired token --> dispatch logout
      const currDateTime = new Date().getTime();
      console.log(exp);
      console.log(currDateTime);
      // if (exp <= currDateTime) logout(dispatch);

      console.log(decoded);

      const payload: IUser = {
        userId,
        username,
        photo,
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
