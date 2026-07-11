import { Link } from "react-router-dom"
import {
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
export default function  Navbar(){

  return(
    <Nav className="container-fluid navbar">
      <div className="navbar-container d-flex">
       <Link to="/" className="navbar-brand">OyoweEnt</Link>
       <div className="navbar-links align-content-center  ">
        <Link to="/" className="home ">Home</Link>
        <Link to="/checkout" className="cart">Cart</Link>
       </div>
       <div className="navbar-auth align-content-center position-absolute end-0 me-4">
        <Link to="/auth" className="login btn btn-secondary btn-sm me-2">Login</Link>
        <Link to="/auth" className="signup btn btn-primary btn-sm">Sign up</Link>
       </div>
      </div>
    </Nav>
  )
}