import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router";

export default function MainNavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container >
        <Navbar.Brand>
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/movie">
            Movies
          </Nav.Link>
          <Nav.Link as={Link} to="/series">
            Series
          </Nav.Link>
          <Nav.Link as={Link} to="/documentry">
            Documentry
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
