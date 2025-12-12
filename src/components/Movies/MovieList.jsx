import { useContext } from "react";
import { Container, Row, Col, Pagination, Stack } from "react-bootstrap";
import MoviesContext from "../../store/MoviesContext";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import useMoviesList from "../../hooks/useMoviesList";

export default function MovieList() {
  const {
    page,
    pageLimit,
    setNextPage,
    setPrevPage,
    setFirstPage,
    setLastPage,
  } = useContext(MoviesContext);
  const { moviesData, totalResults, isLoading } = useMoviesList();

  return (
    <>
      <MovieModal />
      <Container className="my-3">
        <Stack direction="horizontal" gap={3}>
          <Pagination className="p-2 ms-auto">
            <Pagination.First onClick={() => setFirstPage()} />
            <Pagination.Prev onClick={() => setPrevPage()} />
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Next onClick={() => setNextPage()} />
            <Pagination.Last onClick={() => setLastPage()} />
          </Pagination>

          <div>Total Pages:- {pageLimit}</div>
          <div>Total Results:- {totalResults}</div>
        </Stack>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {moviesData &&
            moviesData.map((item) => (
              <Col key={item.id}>
                <MovieCard item={item} isLoading={isLoading} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
