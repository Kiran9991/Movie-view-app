import PaginationControl from "../components/Movies/PaginationControl";
import { Container, Button, Stack } from "react-bootstrap";
import List from "../components/Movies/List";
import MovieModal from "../components/Movies/MovieModal";
import { useContext } from "react";
import MoviesContext from "../store/MoviesContext";
import useFetchData from "../hooks/useFetchData";

export default function MoviePage() {
  const { moviesData, isLoading, totalResults, category, page } = useContext(MoviesContext);
  const { data } = useFetchData(`movie/${category}`, page);

  return (
    <Container className="my-3">
      <Stack direction="horizontal" gap={2} className="my-3">
        <Button variant="outline-secondary">Bollywood</Button>
        <Button variant="outline-secondary">Hollywood</Button>
        <Button variant="outline-secondary">Popular</Button>
        <Button variant="outline-secondary">Top rated</Button>
        <Button variant="outline-secondary">Now playing</Button>
        <Button variant="outline-secondary">Trending</Button>
      </Stack>
      <MovieModal />
      <List items={data.results} isLoading={isLoading} />
      <PaginationControl totalResults={totalResults} />
    </Container>
  );
}
