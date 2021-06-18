import { Container } from "react-bootstrap";
import { AuthContext, AuthProvider } from "./store/providers/AuthProvider";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useContext } from "react";
import PostListPage from "./pages/postListPage/PostListPage";
import LoginPage from "./pages/loginPage/LoginPage";
import PostEditPage from "./pages/postEditPage/PostEditPage";
import "./App.scss";

function App() {
  const auth = useContext(AuthContext);
  const { isAuth } = auth.state;

  return (
    <AuthProvider>
      <Router>
        <Container fluid>
          <Switch>
            {!isAuth ? (
              <Route exact path="/login" component={LoginPage} />
            ) : (
              <Redirect to="/" />
            )}
            {isAuth ? (
              <Route exact path="/" component={PostListPage} />
            ) : (
              <Redirect to="/login" />
            )}
            {isAuth ? (
              <Route exact path="/post-edit" component={PostEditPage} />
            ) : (
              <Redirect to="/login" />
            )}
          </Switch>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
