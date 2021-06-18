import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { login } from "../../store/actions/auth/authActions";
import { AuthContext } from "../../store/providers/AuthProvider";
import "./LoginPage.scss";

const LoginPage: FC = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { dispatch } = useContext(AuthContext);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const { value } = e.target;

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
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter username"
              onChange={handleInput}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleInput}
            />
          </Col>
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
