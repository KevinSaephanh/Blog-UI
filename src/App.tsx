import { Container } from "react-bootstrap";
import { AuthProvider } from "./store/providers/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container fluid>
          <Routes />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
