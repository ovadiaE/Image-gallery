import React from "react";
import "./header.css";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" variant="light" className="navbar">
      <Container>
        <Navbar.Brand href="/">Image Gallery</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
