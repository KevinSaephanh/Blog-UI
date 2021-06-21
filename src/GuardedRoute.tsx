import { Component, createElement } from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    localStorage.hasOwnProperty("token") ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default GuardedRoute;
