import { useContext } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link, useLocation } from "react-router";
import MoviesContext from "../store/MoviesContext";

export default function MainNavBar() {
  const { searchData, setSearchData, setCategory } = useContext(MoviesContext);

  const searchInputHandler = (e) => {
    setSearchData(e.target.value);
  };

  

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Movies" id="movies">
            <NavDropdown.Item
              as={Link}
              to="/movie/popular"
              onClick={() => setCategory("popular")}
            >
              Popular
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/movie/now_playing"
              onClick={() => setCategory("now_playing")}
            >
              Now Playing
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/movie/upcoming"
              onClick={() => setCategory("upcoming")}
            >
              Upcoming
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/movie/top_rated"
              onClick={() => setCategory("top_rated")}
            >
              Top Rated
            </NavDropdown.Item>
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
