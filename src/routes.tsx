import { Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import PostEdit from "./pages/postEdit/PostEdit";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PostEdit} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
