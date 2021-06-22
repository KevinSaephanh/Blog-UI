import { FC, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./store/providers/AuthProvider";

interface GuardedRouteProps {
  path: string;
  component: FC<any>;
  exact: boolean;
}

const GuardedRoute: FC<GuardedRouteProps> = (props: GuardedRouteProps) => {
  const authContext = useContext(AuthContext);
  const { isAuth } = authContext.state;
  const { path, exact, component } = props;

  return isAuth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default GuardedRoute;
