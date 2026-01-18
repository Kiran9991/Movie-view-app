import useFetchData from "../hooks/useFetchData";
import PaginationControl from "../components/Movies/PaginationControl";
import HorizontalScrollList from "../components/HorizontalScrollList";
import { useEffect, useState } from "react";
import ListCard from "../components/ListCard";

export default function HomePage() {
  const [timeWindow, setTimeWindow] = useState("day");
  const { data, getDataApi } = useFetchData(`trending/movie/${timeWindow}`);

  function setTimdWindowhandler(flag) {
    !flag && setTimeWindow("day");
    flag && setTimeWindow("week");
  }

  return (
    <>
      <HorizontalScrollList lists={data.results} />
      <>
        <ListCard items={data.results}/>
        <PaginationControl />
      </>
    </>
  );
}
