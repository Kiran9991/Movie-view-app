import useMoviesList from "../hooks/useMoviesList";
import PaginationControl from "../components/Movies/PaginationControl";
import { Container } from "react-bootstrap";
import List from "../components/Movies/List";
import MovieModal from "../components/Movies/MovieModal";
import { useContext } from "react";
import MoviesContext from "../store/MoviesContext";

export default function MoviePage() {
  const { moviesData } = useMoviesList();
  const { isLoading, totalResults } = useContext(MoviesContext);

  return (
    <Container className="my-3">
      <MovieModal />
      <PaginationControl totalResults={totalResults} />
      <List items={moviesData} isLoading={isLoading} />
    </Container>
  );
}
