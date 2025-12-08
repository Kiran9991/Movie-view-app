import { useContext } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router";
import MoviesContext from "../store/MoviesContext";

export default function MainNavBar() {
  const { searchData, setSearchData,
    getSearchMoviesData
   } = useContext(MoviesContext);

   const searchInputHandler = (e) => {
    setSearchData(e.target.value)
    getSearchMoviesData();
   }

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
