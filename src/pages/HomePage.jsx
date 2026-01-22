import useFetchData from "../hooks/useFetchData";
import { useEffect, useState } from "react";
import ListCard from "../components/ListCard";

export default function HomePage() {
  const [timeWindow, setTimeWindow] = useState("day");
  const { data } = useFetchData(`trending/movie/${timeWindow}`, {});

  return (
    <>
      <ListCard items={data.results} title="Trending Movies" />
    </>
  );
}
