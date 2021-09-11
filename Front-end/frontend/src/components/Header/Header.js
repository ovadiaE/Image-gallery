import React from "react";
import { ReactComponent as Logo } from "../../logo/logo.svg";
import "./header.css";
import { Navbar, Container } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="light" variant="light" className="navbar">
      <Container>
        <Logo style={{ maxWidth: "25rem", maxHeight: "5rem" }} />
      </Container>
    </Navbar>
  );
};

export default Header;
