import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">🍕 PIZZERÍA REACT</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/register">Registro</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/profile">Perfil</Nav.Link>
        </Nav>

        
        <Nav>
          <Nav.Link
            as={Link}
            to="/cart"
            className="btn btn-success text-white"
          >
            🛒 Total: $0
          </Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  );
}

export default NavBar;

