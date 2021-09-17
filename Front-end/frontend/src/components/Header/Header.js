import React from "react";
import { ReactComponent as Logo } from "../../logo/logo.svg";
import { Navbar, Container } from "react-bootstrap";
import Login from "../Login&signup/Login";
import Signup from "../Login&signup/Signup";
import "./header.css";
const Header = () => {
  return (
    <Navbar bg="light" variant="light" className="navbar">
      <Container>
        <Logo style={{ maxWidth: "25rem", maxHeight: "5rem" }} />
        <div>
          <Login />
          <Signup />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
