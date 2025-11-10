import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">🍕 PIZZERÍA REACT</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Menú</Nav.Link>
          <Nav.Link href="#">Carrito</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
