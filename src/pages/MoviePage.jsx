import PaginationControl from "../components/Movies/PaginationControl";
import { Container, Button, Stack } from "react-bootstrap";
import List from "../components/Movies/List";
import MovieModal from "../components/Movies/MovieModal";
import { useContext } from "react";
import MoviesContext from "../store/MoviesContext";

export default function MoviePage() {
  const { moviesData, isLoading, totalResults } = useContext(MoviesContext);

  return (
    <Container
      className="my-3"
    >
      <MovieModal />
      <List items={moviesData} isLoading={isLoading} />
      <PaginationControl totalResults={totalResults} />
    </Container>
  );
}
