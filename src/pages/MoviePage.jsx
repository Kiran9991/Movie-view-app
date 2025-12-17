import useMoviesList from "../hooks/useMoviesList";
import PaginationControl from "../components/Movies/PaginationControl";
import { Container, Button, Stack } from "react-bootstrap";
import List from "../components/Movies/List";
import MovieModal from "../components/Movies/MovieModal";
import { useContext } from "react";
import MoviesContext from "../store/MoviesContext";

export default function MoviePage() {
  const { moviesData } = useMoviesList();
  const { isLoading, totalResults } = useContext(MoviesContext);

  return (
    <Container className="my-3">
        <Stack direction="horizontal" gap={2}>
      <Button variant="outline-secondary">Trending</Button>
      <Button variant="outline-secondary">Latest</Button>
      <Button variant="outline-secondary">Top Rated</Button>
      <Button variant="outline-secondary">Popular</Button>
      <Button variant="outline-secondary">Upcoming</Button>
      <Button variant="outline-secondary">Bollywood</Button>
      <Button variant="outline-secondary">Hollywood</Button>

        </Stack>
      <MovieModal />
      <PaginationControl totalResults={totalResults} />
      <List items={moviesData} isLoading={isLoading} />
    </Container>
  );
}
