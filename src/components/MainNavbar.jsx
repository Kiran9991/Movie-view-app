import { useContext } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import MoviesContext from "../store/MoviesContext";
import useMoviesList from "../hooks/useMoviesList";
import useTvShowsList from "../hooks/useTvShowsList";

export default function MainNavBar() {
  const { getMoviesData } = useMoviesList();
  const { getTvShowsData } = useTvShowsList();
  const { searchData, setSearchData } = useContext(MoviesContext);
  const { pathname } = useLocation();

  const searchInputHandler = (e) => {
    setSearchData(e.target.value);
    pathname === "/movie" && getMoviesData("search/movie");
    pathname === "/tv-shows" && getTvShowsData("search/tv");
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
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
          <Nav.Link as={Link} to="/tv-shows">
            Tv shows
          </Nav.Link>
          <Nav.Link as={Link} to="/documentry">
            Documentry
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
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
