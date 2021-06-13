import { Route, Switch } from "react-router-dom";
import PostEdit from "./pages/postEdit/PostEdit";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PostEdit} />
    </Switch>
  );
};

export default Routes;
