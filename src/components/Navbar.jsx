import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

function NavBar() {
  const total = 25000;
  const token = false;
  const formattedTotal = total.toLocaleString();

  return (
    <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand >Pizzería MammaMia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-primary" className="me-2">Home</Button>
            {token ? (
              <>
                <Button variant="outline-secondary" className="me-2">Profile</Button>
                <Button variant="outline-danger" className="me-2">Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-success" className="me-2">Login</Button>
                <Button variant="outline-warning" className="me-2">Register</Button>
              </>
            )}
            <Button variant="outline-info">🛒 Total: ${formattedTotal}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;