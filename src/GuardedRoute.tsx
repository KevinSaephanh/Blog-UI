import { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    localStorage.hasOwnProperty("token") ? (
      <Component {...rest} {...props} />
    ) : (
      <Redirect to="/login" />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default GuardedRoute;
