import useFetchData from "../hooks/useFetchData";
import List from "../components/Movies/List";
import { Container, Stack } from "react-bootstrap";
import PaginationControl from "../components/Movies/PaginationControl";
import { ButtonSlider } from "../components/ButtonSlider";
import HorizontalScrollList from "../components/HorizontalScrollList";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [timeWindow, setTimeWindow] = useState("day");
  const { data, getDataApi } = useFetchData(`trending/movie/${timeWindow}`);

  function setTimdWindowhandler(flag) {
    !flag && setTimeWindow("day");
    flag && setTimeWindow("week");
  }

  return (
    <>
      <Stack direction="horizontal" gap={5} className="mt-3 ml-3">
        <div className="font-medium text-2xl">Trending</div>
        <ButtonSlider
          text1={"Today"}
          text2={"This Week"}
          btnChange={setTimdWindowhandler}
        />
      </Stack>
      <HorizontalScrollList lists={data.results} />
      <Container className="my-3">
        <List items={data.results} />
        <PaginationControl />
      </Container>
    </>
  );
}
