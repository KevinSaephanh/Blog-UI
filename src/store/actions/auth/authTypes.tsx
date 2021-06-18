import IUser from "../../../shared/models/IUser";

export enum AuthActions {
  LOGIN_SUCCESS = "LOGIN SUCCESS",
  LOGIN_FAILURE = "LOGIN FAILURE",
  LOGOUT = "LOGOUT",
  SET_USER = "SET USER",
}

export interface ILoginSuccess {
  readonly type: AuthActions.LOGIN_SUCCESS;
  payload: {};
}

export interface ILoginFailure {
  readonly type: AuthActions.LOGIN_SUCCESS;
}

export interface ILogout {
  readonly type: AuthActions.LOGOUT;
}

export interface ISetUser {
  readonly type: AuthActions.SET_USER;
  payload: {};
}

export type AuthAction = ILoginSuccess | ILoginFailure | ILogout | ISetUser;
