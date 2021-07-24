import { useContext } from "react";
import { Container } from "react-bootstrap";

// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GuardedRoute from "./GuardedRoute";

// Providers
import { AuthContext, AuthProvider } from "./store/providers/AuthProvider";
import { PostProvider } from "./store/providers/PostProvider";

// Components
import PostListPage from "./pages/postListPage/PostListPage";
import LoginPage from "./pages/loginPage/LoginPage";
import PostEditPage from "./pages/postEditPage/PostEditPage";
import PostViewPage from "./pages/postViewPage/PostViewPage";
import Header from "./components/header/Header";

import "./App.scss";

function App() {
  const { dispatch, state } = useContext(AuthContext);

  return (
    <AuthProvider>
      <PostProvider>
        <Router>
          <Container fluid>
            <Header />
            <Switch>
              <Route exact path="/" component={PostListPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/post/:id" component={PostViewPage} />
              <Route exact path="/post-create" component={PostEditPage} />
              {/* <Route exact path="/post-edit/:id" component={PostEditPage} /> */}
              <GuardedRoute
                exact
                path="/post/:id/edit"
                component={PostEditPage}
              />
            </Switch>
          </Container>
        </Router>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
