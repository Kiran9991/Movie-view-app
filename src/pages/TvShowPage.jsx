import { useContext } from "react";
import { Container } from "react-bootstrap";
import MovieModal from "../components/Movies/MovieModal";
import List from "../components/Movies/List";
import PaginationControl from "../components/Movies/PaginationControl";
import TvShowsConstext from "../store/TvShowsContext";

export default function TvShowPage() {
  const { tvShowsData, isLoading, totalResults } = useContext(TvShowsConstext);

  return (
    <Container className="my-3">
      <MovieModal />
      <PaginationControl totalResults={totalResults} />
      <List items={tvShowsData} isLoading={isLoading} />
    </Container>
  );
}
