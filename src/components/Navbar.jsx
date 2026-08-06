import { Link } from "react-router-dom";
import { Container, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <Nav className="container-fluid navbar bg-white">
      <div className="navbar-container d-flex">
        <Link to="/" className="navbar-brand">
          <img
            src="/HJYG4683.PNG"
            className="nav-logo img-fluid position-absolute top-0 "
          />
        </Link>
        <div className="navbar-links align-content-center  justify-content-center">
          <Link to="/" className="home ">
            Home
          </Link>
          <Link to="/checkout" className="cart">
            Cart
          </Link>
        </div>
        {!user ? (
          <div className="navbar-auth align-content-center position-absolute end-0 me-4">
            <Link to="/auth" className="login btn btn-secondary btn-sm me-2">
              Login
            </Link>
            <Link to="/auth" className="signup btn btn-primary btn-sm">
              Sign up
            </Link>
          </div>
        ) : (
          <div className="navbar-user align-content-center position-absolute end-0 me-4">
            <span className="me-2">Hello, {user.name}</span>
            <Link to="/auth" className="text-dark">
            <button
              onClick={logout}
              className="bg-danger text-white rounded-1 btn btn-sm border-0"
            >
              Logout
            </button>
            </Link>
          </div>
        )}
      </div>
    </Nav>
  );
}
