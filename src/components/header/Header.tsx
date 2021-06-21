import { FC, useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { logout } from "../../store/actions/auth/authActions";
import { AuthContext } from "../../store/providers/AuthProvider";

const Header: FC = () => {
  const { state, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ padding: "12px" }}>
      <Navbar.Brand href="/">KevLog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {state.isAuth ? (
            <div>
              <Nav.Link href="/post-create">Create Post</Nav.Link>
              <Nav.Link href="" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </div>
          ) : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
