import useFetchData from "../hooks/useFetchData";
import List from "../components/Movies/List";
import { Container, Stack } from "react-bootstrap";
import PaginationControl from "../components/Movies/PaginationControl";
import ButtonSlider from "../components/ButtonSlider";
import HorizontalScrollList from "../components/HorizontalScrollList";

export default function HomePage() {
  const { data, getDataApi } = useFetchData("trending/movie/day");

  return (
    <>
      <Stack direction="horizontal" gap={5} className="mt-3 ml-3">
        <div className="font-medium text-2xl">Trending</div>
        <ButtonSlider text1={"Today"} text2={"This Week"} />
      </Stack>
      <HorizontalScrollList lists={data.results} />
      <Container className="my-3">
        <List items={data.results} />
        <PaginationControl />
      </Container>
    </>
  );
}
