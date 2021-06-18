import IUser from "./../../shared/models/IUser";
import { AuthActions } from "../actions/auth/authTypes";

export interface IAuthState {
  user: IUser;
  isAuth: boolean;
}

// Initial state for auth
export const initialAuthState: IAuthState = {
  user: {} as IUser,
  isAuth: false,
};

export const AuthReducer = (state: IAuthState, action: any): any => {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS:
    case AuthActions.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case AuthActions.LOGIN_FAILURE:
    case AuthActions.LOGOUT:
      window.location.href = "/login";

      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
