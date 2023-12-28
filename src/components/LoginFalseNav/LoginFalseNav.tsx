import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default function LoginFalseNav() {
  return (
    <div>
      <Link to="/login">
        {" "}
        <Nav.Link className="navLogin" href="#action1">
          Log in
        </Nav.Link>
      </Link>
      <Link to="/signup">
        {" "}
        <Nav.Link className="navSignUp" href="#action2">
          Sign up
        </Nav.Link>
      </Link>
    </div>
  );
}
