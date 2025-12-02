import { useState, useContext } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router";
import MoviesContext from "../store/MoviesContext";

export default function MainNavBar() {
  const [searchData, setSearchData] = useState();
  const movieCtx = useContext(MoviesContext);

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchData(e.target.value.toLowerCase());
    const filteredMovies = [...movieCtx.moviesData.filter((item) => 
    item.original_title.toLowerCase().includes(searchData)
    )]
    filteredMovies.length > 0 && movieCtx.getMoviesData(filteredMovies);
    console.log(filteredMovies, searchData)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
    setSearchData('')
  }

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
        <Form
        onSubmit={submitHandler}
        className="d-flex">
          <Form.Control 
          value={searchData}
          onChange={changeHandler}
          type="text" 
          placeholder="Enter text here..."
          className="me-2 bg-white text-black"
          />
          <Button variant="success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}
