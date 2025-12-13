import { useContext } from "react";
import { Container } from "react-bootstrap";
import MovieModal from "../components/Movies/MovieModal";
import List from "../components/Movies/List";
import PaginationControl from "../components/Movies/PaginationControl";
import useTvShowsList from "../hooks/useTvShowsList";
import MoviesContext from "../store/MoviesContext";

export default function TvShowPage() {
  const { tvShowsList } = useTvShowsList();
  const { isLoading, totalResults } = useContext(MoviesContext);

  return (
    <Container className="my-3">
      <MovieModal />
      <PaginationControl totalResults={totalResults} />
      <List items={tvShowsList} isLoading={isLoading} />
    </Container>
  );
}
