import { useContext } from "react";
import { Navbar, Container, Nav, Form, Button, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import MoviesContext from "../store/MoviesContext";

export default function MainNavBar() {
  const { searchData, setSearchData } = useContext(MoviesContext);

  const searchInputHandler = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/movie">
            Movies
          </Nav.Link>
          <NavDropdown title="Movies" id="movies">
            <NavDropdown.Item>Popular</NavDropdown.Item>
            <NavDropdown.Item>Now Playing</NavDropdown.Item>
            <NavDropdown.Item>Upcoming</NavDropdown.Item>
            <NavDropdown.Item>Top Rated</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/tv-shows">
            Tv shows
          </Nav.Link>
          <NavDropdown title="Genres" id="genresMovies">
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Adventure</NavDropdown.Item>
            <NavDropdown.Item>comedy</NavDropdown.Item>
            <NavDropdown.Item>Romance</NavDropdown.Item>
            <NavDropdown.Item>Thriller</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form className="d-flex">
          <Form.Control
            value={searchData}
            onChange={searchInputHandler}
            type="text"
            placeholder="Enter text here..."
            className="me-2 bg-white text-black"
          />
        </Form>
      </Container>
    </Navbar>
  );
}
