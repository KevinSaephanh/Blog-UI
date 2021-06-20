import { Container } from "react-bootstrap";
import { AuthContext, AuthProvider } from "./store/providers/AuthProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import PostListPage from "./pages/postListPage/PostListPage";
import LoginPage from "./pages/loginPage/LoginPage";
import PostEditPage from "./pages/postEditPage/PostEditPage";
import GuardedRoute from "./GuardedRoute";
import "./App.scss";
import PostViewPage from "./pages/postViewPage/PostViewPage";
import { PostProvider } from "./store/providers/PostProvider";

function App() {
  const { dispatch, state } = useContext(AuthContext);

  return (
    <AuthProvider>
      <PostProvider>
        <Router>
          <Container fluid>
            <Switch>
              <Route exact path="/" component={PostListPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/post/:id" component={PostViewPage} />
              <Route exact path="/post-edit" component={PostEditPage} />
              {/* <GuardedRoute
                exact
                path="/post-edit/:id"
                component={PostEditPage}
              /> */}
            </Switch>
          </Container>
        </Router>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
