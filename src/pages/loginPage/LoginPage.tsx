import {
  ChangeEvent,
  FC,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Form, Button } from "react-bootstrap";
import { login } from "../../store/actions/auth/authActions";
import { AuthContext } from "../../store/providers/AuthProvider";
import "./LoginPage.scss";

const LoginPage: FC = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    console.log("STATE: " + JSON.stringify(state));
    if (state.isAuth) window.location.href = "/";
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const { username, password } = inputs;
    login(username, password, dispatch);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter username"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleInput}
          />
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          onClick={(e: FormEvent) => handleLogin(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
