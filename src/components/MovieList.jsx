import React, { useContext } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import MoviesContext from "../store/MoviesContext";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const {
    filteredMoviesData,
    page,
    setNextPage,
    setPrevPage,
    setFirstPage,
    setLastPage,
  } = useContext(MoviesContext);

  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-center mt-3">
          <Col xs="auto">
            <Pagination>
              <Pagination.First onClick={() => setFirstPage()} />
              <Pagination.Prev onClick={() => setPrevPage()} />
              <Pagination.Item active>{page}</Pagination.Item>
              <Pagination.Next onClick={() => setNextPage()} />
              <Pagination.Last onClick={() => setLastPage()} />
            </Pagination>
          </Col>
        </Row>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredMoviesData &&
            filteredMoviesData.map((item) => (
              <Col key={item.id}>
                <MovieCard item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
